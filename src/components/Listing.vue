<template>
  <section>
    <div class="container">
      <div class="row">
        <Card
          v-for="entry in realEstateList"
          :key="entry._id"
          :realEstate="entry"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Card from "@/components/Card.vue";
import apiRequest from "../utility/apiRequest";
import { mapGetters } from "vuex";
export default {
  components: {
    Card,
  },
  created() {
    this.fetchRealEstate();
  },
  methods: {
    async fetchRealEstate() {
      const result = await apiRequest.getRealEstateList();
      this.$store.dispatch("fetchRealEstates", result);
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      user: "user",
      realEstateList: "realEstatesList",
    }),
  },
};
</script>
