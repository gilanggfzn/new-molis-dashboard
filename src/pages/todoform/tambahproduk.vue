<template>
  <div class="w-full h-full px-12 py-12 text-black bg-gray-100">
    <h3 class="my-2 text-xl font-bold">Tambah Produk</h3>
    <div class="mx-5 bg-white">
      <form
        @submit.prevent="submitDealer"
        action=""
        id="file-upload-form"
        class="uploader"
      >
        <div class="items-start px-5 py-5 text-lg">
          <div class="px-2 py-2 my-4">
            <label class="block">Nama Produk</label>
            <input
              v-model="form.namaProduk"
              class="w-full"
              type="text"
              name="namaproduk"
              placeholder="Masukkan nama produk.."
            />
          </div>
          <div class="px-2 py-2 my-2">
            <label class="block">Nama Id</label>
            <input
              v-model="form.merkId"
              class="w-full"
              type="text"
              name="Namamerek"
              placeholder="Masukkan nama merek.."
            />
          </div>
          <div class="px-2 py-2">
            <label class="block">Estimasi Jarak</label>
            <input
              v-model="form.estimasiJarak"
              class="w-full"
              type="text"
              name="Estimasijarak"
              placeholder="Masukkan Estimasi jarak.."
            />
          </div>
          <div class="px-2 py-2 my-4">
            <label class="block">Kecepatan Max</label>
            <input
              v-model="form.kecepatanMax"
              class="w-full"
              type="text"
              name="KecepatanMax"
              placeholder="Masukkan KecepatanMax.."
            />
          </div>
          <div class="px-2 py-2 my-4">
            <label class="block">Kapasitas Baterai</label>
            <input
              v-model="form.kapasitasBaterai"
              class="w-full"
              type="text"
              name="KapasitasBaterai"
              placeholder="Masukkan KapasitasBaterai.."
            />
          </div>
          <div class="px-2 py-2 my-4">
            <label class="block">Ketahanan Baterai</label>
            <input
              v-model="form.ketahananBaterai"
              class="w-full"
              type="text"
              name="KetahananBaterai"
              placeholder="Masukkan KetahananBaterai.."
            />
          </div>
          <div class="px-2 py-2 my-4">
            <label class="block">Daya Max</label>
            <input
              v-model="form.dayaMax"
              class="w-full"
              type="text"
              name="DayaMax"
              placeholder="Masukkan DayaMax.."
            />
          </div>
          <div class="px-2 py-2 my-4">
            <label class="block">Link Website Produk</label>
            <input
              v-model="form.linkWebsiteProduk"
              class="w-full"
              type="text"
              name="LinkWebproduk"
              placeholder="Masukkan LinkWebproduk.."
            />
          </div>
          <div class="px-2 py-2 my-4">
            <label class="block">Logo</label>
            <input
              v-model="form.logo"
              class="w-full"
              type="text"
              name="LinkWebproduk"
              placeholder="Masukkan LinkWebproduk.."
            />
          </div>
          <div class="px-2 py-2 my-4">
            <label class="block">Upload Gambar</label>
            <input
              v-model="form.gambarProduk"
              class="w-full"
              type="text"
              name="LinkWebproduk"
              placeholder="Masukkan LinkWebproduk.."
            />
          </div>

          <div class="px-2 py-2 my-4">
            <label class="block my-4">
              <span class="block text-lg"> Keterangan (optional) </span>
              <textarea
                v-model="form.keterangan"
                placeholder="Masukkan keterangan"
                class="block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem]"
                id="exampleFormControlTextarea1"
                rows="5"
              ></textarea>
            </label>
          </div>
        </div>
      </form>
      <div class="px-3 mx-3 my-4">
        <button
          @click.prevent="addProduk"
          class="mb-2 rounded-lg border-2 border-cyan-600 px-6 pb-[6px] pt-2 font-medium leading-normal text-white bg-cyan-500 hover:bg-cyan-700 hover:bg-opacity-100 hover:text-white focus:border-cyan-600 focus:text-gray-800 focus:outline-none focus:ring-0 active:border-cyan-600 active:text-gray-700"
        >
          Simpan
        </button>
        <span class="mx-3"></span>
        <button
          @click.prevent="onbatalClick"
          class="mb-2 rounded-lg border-2 border-cyan-500 px-6 pb-[6px] pt-2 font-medium leading-normal text-cyan-600 hover:border-cyan-500 hover:bg-cyan-500 hover:bg-opacity-40 hover:text-white focus:border-cyan-600 focus:text-gray-800 focus:outline-none focus:ring-0 active:border-cyan-600 active:text-gray-700"
          data-te-ripple-init
        >
          Batal
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        namaProduk: "",
        merkId: "",
        estimasiJarak: "",
        kecepatanMax: "",
        kapasitasBaterai: "",
        ketahananBaterai: "",
        dayaMax: "",
        linkWebsiteProduk: "",
        logo: "",
        gambarProduk: "",
        keterangan: "",
      },
    };
  },
  methods: {
    onbatalClick() {
      this.$router.push("/merk");
    },
    submitDealer() {
      alert("berhasil tambah dealer");
    },
    handleFileChange(event) {
      // Handle file change logic here
      console.log(event.target.files[0]);
    },
    async addProduk() {
      try {
        const response = await axios.post(
          `https://molis-production.up.railway.app/api/produk/add`,
          this.form
        );
        if (response.status === 200) {
          this.$router.push("/dftproduk");
        } else {
          alert("Periksa Inputan");
        }
      } catch (error) {
        console.error("Failed to fetch merk:", error);
      }
    },
  },
};
</script>

<style scoped>
/* Tambahkan gaya sesuai keinginan Anda */
.file-input-container {
  display: flex;
  align-items: center;
}

.file-input-label {
  position: relative;
  cursor: pointer;
  width: 300px; /* Sesuaikan dengan kebutuhan */
  height: 50px; /* Sesuaikan dengan kebutuhan */
  border: 2px solid #458dbd; /* Warna biru sesuai yang Anda inginkan */
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.file-input {
  opacity: 0;
  position: absolute;
}

.file-input-icon {
  font-size: 24px; /* Sesuaikan dengan kebutuhan */
  color: #3498db; /* Warna biru sesuai yang Anda inginkan */
}
.file-input-icon img {
  width: 24px; /* Sesuaikan dengan kebutuhan */
  height: 24px; /* Sesuaikan dengan kebutuhan */
  border-radius: 8px;
}
</style>
