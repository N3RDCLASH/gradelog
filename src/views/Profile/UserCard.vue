<template>
  <b-card type="user">
    <p class="card-text"></p>
    <div class="author">
      <div class="block block-one"></div>
      <div class="block block-two"></div>
      <div class="block block-three"></div>
      <div class="block block-four"></div>
      <a href="#">
        <input
          type="file"
          style="display:none"
          @change="onFileSelected"
          name="profilePicture"
          id
          ref="imageInput"
        />
        <b-dropdown size="lg" variant="link" toggle-class="text-decoration-none" no-caret>
          <template v-slot:button-content>
            <b-avatar :src="user.photoURL" alt="User Photo" size="5em" />
          </template>
          <b-dropdown-item @click="$refs.imageInput.click()">Add/change profile picture</b-dropdown-item>
          <b-dropdown-item href="#">Remove profile picture</b-dropdown-item>
        </b-dropdown>

        <h5 class="title mt-md-2">{{user.firstName + user.lastName}}</h5>
      </a>
      <p class="description">{{user.title}}</p>
    </div>
    <p></p>
    <p class="card-description">{{user.description}}</p>
    <div slot="footer" class="button-container">
      <b-button icon round class="btn-social">
        <b-icon icon="facebook" class="mr-2"></b-icon>
      </b-button>
      <b-button icon round class="btn-social">
        <i class="fab fa-twitter"></i>
      </b-button>
      <b-button icon round class="btn-social">
        <i class="fab fa-google-plus"></i>
      </b-button>
    </div>

    <div>
      <b-modal id="modal-1" title="BootstrapVue" @ok="changeProfileImage">
        <p v-if="selectedFile != null" class="my-4">{{selectedFile.name}} .</p>
        <img v-if="convertedBase64 != null" :src="convertedBase64" alt />

        <p>Upload progress:</p>
        <b-progress :value="uploadProgress" show-progress animated></b-progress>
      </b-modal>
    </div>
  </b-card>
</template>
<script>
import Jimp from "jimp/es";
import * as firebase from "firebase";
import "firebase/storage";
import "firebase/firestore";
export default {
  props: {
    user: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      selectedFile: null,
      convertedBase64: null,
      uploadProgress: 0,
      allowedExtensions: ["jpg", "jpeg", "jpe", "jif", "jfif", "jfi", "png"],
    };
  },
  methods: {
    onFileSelected: function (e) {
      let extension = e.target.files[0].name.split(".").pop();

      if (this.allowedExtensions.includes(extension.toLowerCase())) {
        this.selectedFile = e.target.files[0];
        this.convertImageToJpeg();
        this.$bvModal.show("modal-1");
      } else {
        alert("file format not supported");
      }
    },
    convertImageToJpeg: function () {
      Jimp.read(URL.createObjectURL(this.selectedFile))
        .then((img) => {
          return img
            .resize(256, 256) // resize
            .quality(100)
            .getBase64("image/jpeg", (err, data) => {
              this.convertedBase64 = data;
            }); // return base64 string and set data property
        })
        .catch((err) => {
          console.error(err);
        });
    },
    changeProfileImage: function (e) {
      e.preventDefault();
      const storageRef = firebase
        .storage()
        .ref(`${this.user.uid}/ profilePicture.jpg`);

      let uploadTask = storageRef.putString(this.convertedBase64, "data_url");

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          this.uploadProgress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (err) => {
          console.log(err);
        },
        async () => {
          let url = await uploadTask.snapshot.ref.getDownloadURL();
          this.updatePhotoURL(url);
          this.$bvModal.hide("modal-1");
        }
      );
    },

    removeProfileImage: () => {},
    updatePhotoURL(url) {
      firebase
        .firestore()
        .collection("users")
        .doc(this.user.uid)
        .update({ photoURL: url })
        .catch((err) => console.log("error:" + err));
    },
  },
};
</script>
<style scoped>
.btn-social {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
</style>
