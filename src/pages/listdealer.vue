<template>
  <div class="w-full h-full overflow-y-scroll">
    <div class="">
      <!--header content-->
      <div class="h-[180px] max-w-screen min-w-full bg-gray-100 flex justify-start mb-2">
        <div class="pt-12 pl-10">
          <div class="h-[50px] flex items-center shadow-sm min-w-full py-[10px]">
            <h2 class="pt-24 text-5xl font-bold">Dealer</h2>
          </div>
        </div>
      </div>
      <!--content-->
      <div class="relative m-3 mx-10 mt-3">
        <!--navbar-->
        <div class="flex my-3 min-w-[300px] pl-[910px]">
          <input
            v-model="search"
            type="search"
            name="search"
            class="relative w-[250px] bg-transparent rounded-full border outline-none pl-5 focus:border-gray-600 focus:text-gray-700 focus:cursor-text focus:pr-3 px-3 py-[0.25rem] text-gray-400 transition duration-200 ease-in-out focus:z-[3]"
            placeholder="Cari..."
            aria-label="Cari..."
            aria-describedby="button-addon3"
          />
          <button
            class="relative px-2 py-1 font-medium text-gray-500 transition duration-150 ease-in-out border-none rounded-full"
            type="button"
            id="searchButton"
            @click="handleClick"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="h-6 w-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
          <br />
          <div class="relative">
            <router-link
              to="/listdealertable"
              class="inline-flex rounded-2xl items-center justify-center bg-cyan-600 px-[10px] h-[35px] text-white text-sm font-bold hover:bg-cyan-800"
              v-on:click.prevent="onTambahDealerClick"
            >
              Tambah Dealer
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 ml-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </router-link>
          </div>
        </div>
              <!-- Table -->
        <table id="dealertable" class="min-w-full text-sm text-left">
          <!-- Table headers -->
          <thead class="h-auto px-2 py-2 tracking-wider uppercase bg-blue-100">
            <tr>
              <th scope="col" class="px-6 py-4">No</th>
              <th scope="col" class="px-6 py-4">Nama Dealer</th>
              <th scope="col" class="px-6 py-4">Kontak</th>
              <th scope="col" class="px-6 py-4">Link Website</th>
              <th scope="col" class="px-6 py-4">Merk</th>
              <th scope="col" class="px-6 py-4">Aktif</th>
              <th scope="col" class="px-6 py-4">Aksi</th>
            </tr>
          </thead>
          <!-- Table body -->
          <tbody>
            <tr v-for="(dealer, index) in filterDealer" :key="index" class="h-auto">
              <th class="px-6 py-4 my-4 text-base whitespace-nowrap">{{ index + 1 }}</th>
              <td class="px-4 py-4 my-4 text-base whitespace-nowrap">
                {{ dealer.namaDealer }}
              </td>
              <td class="px-4 py-4 my-4 text-base whitespace-nowrap">
                {{ dealer.kontak }}
              </td>
              <td class="px-4 py-4 my-4 text-base whitespace-nowrap">
                {{ dealer.linkWebsite }}
              </td>
              <td class="px-4 py-4 my-4 text-base whitespace-nowrap">
                {{ dealer.merk?.namaMerk }}
              </td>
              <td class="px-6 py-4 my-4 text-base whitespace-nowrap">
                <togglebutton v-model="Aktif"></togglebutton>
              </td>
              <td class="py-4 my-4 whitespace-nowrap">
                <div class="relative inline-flex">
                  <router-link
                  id="editDealerButton"
                  class="text-sm text-gray-500 rounded-lg"
                  :to="{name: 'editDealer', params: {id:dealer.dealerId}}"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 ml-3"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </router-link>
                <button
                  id="deleteDealerButton"
                  class="text-sm text-gray-500 rounded-lg"
                  @click="deleteDealer(dealer.dealerId)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 ml-3"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <!--pagination-->
        <div class="inline-flex mt-3">
            <p class="px-3 mx-2">Menampilkan</p>
            <select class="px-3 focus-border-cyan300" @change="updateLimit($event.target.value)">
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          <ul class="inline-flex space-x-2 ml-[950px]">
            <li>
              <button
                class="px-4 text-black"
                @click="page--"
                :disabled="page === 1"
              >
              Prev
            </button>
          </li>
          <li>
            <button
            class="px-4 text-black"
            @click="page--"
            :hidden="page ===1">
              {{ page-1 }}
            </button>
          </li>
          <li>
            <p>
              {{ page }}
            </p>
          </li>
          <li>
            <button
            @click="page++"
            :hidden="page === totalPages"
            class="px-4 text-black">
              {{ page+1 }}
            </button>
          </li>
          <li>
            <button
              class="px-4 text-black"
              @click="page++"
              :disabled="page * limit >= total"
            >
              Next
            </button>
          </li>
      </ul>
      </div>
      </div>
    </div>
  </div>
  <!--main-->
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      Aktif: true,
      dealers: [],
      error: [],
      search: "",
      limit:10,
      page:1,
    };
  },
  mounted() {
    this.fetchDealers();
  },
  watch: {
    search(newValue) {
      if (newValue === "") {
        this.fetchDealers();
      }
    },
  },
  methods: {
    fetchDealers() {
      axios
        .get("https://molis-production.up.railway.app/api/dealers/active")
        .then((response) => {
          this.dealers = response.data;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
    async searchDealerByName() {
      try {
        const response = await axios.get(
          `https://molis-production.up.railway.app/api/dealers/findByName?namaDealer=${this.search}`
        );
        this.dealers=[];
        console.log(this.dealers);
        this.dealers.push(response.data);
      } catch (error) {
        console.error("Failed to fetch dealers:", error);
      }
    },
    handleClick() {
      this.searchDealerByName();
    },
    async deleteDealer(id) {
      try {
        const response = await axios.delete(
          `https://molis-production.up.railway.app/api/dealers/delete/${id}`
        );
        console.log(response);
        this.fetchDealers();
      } catch (error) {
        console.error("Gagal menghapus dealer:", error);
      }
    },
    onTambahDealerClick() {
      this.$router.push({ path: "/listdealertable" });
    },
    onEditDealerClick() {
      this.$router.push({ path: "/editdealer" });
    },
    async updateLimit(limit){
      this.limit = limit;
      await this.fetchDealers();
    }
  },
  computed: {
    total(){
      return this.dealers.length;
    },
    totalPages() {
      return Math.ceil(this.total / this.limit);
    },
    filterDealer(){
      const start = (this.page -1) * this.limit;
      const end = start + this.limit;
      return this.dealers.slice(start, end);
    }
  },
}
</script>

<style>
.active-page {
  background-color: #3498db;
  border: 1px solid #3498db;
  color: white;
}
.active-page:hover {
  background-color: #2988c8;
}
</style>
