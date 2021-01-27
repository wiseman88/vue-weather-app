<template>
  <div class="home uk-position-cover">
    <div class="uk-container">
      <div class="uk-padding">
        <h1 class="uk-title-large uk-text-bold uk-text-center uk-margin-large">Weather App</h1>
        <div class="uk-card uk-card-secondary uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
            <div class="uk-card-media-left uk-cover-container">
                <img src="../assets/img/img.jpg" alt="" uk-cover>
                <canvas width="600" height="400"></canvas>
            </div>
            <div>
                <div class="uk-card-body">
                    <form @submit.prevent='search()'>
                      <div class="uk-fieldset">
                        <div class="uk-margin">
                            <p class="uk-text-bold">Add City</p>
                            <input class="uk-input" type="text" placeholder="Enter City" v-model="city">
                        </div>
                        <div class="uk-margin">
                            <p class="uk-text-bold">Add Country</p>
                            <input class="uk-input" type="text" placeholder="Enter Country" v-model="country">
                        </div>
                        <div class="uk-margin">
                          <button type="submit" class="uk-button uk-button-default uk-width-1-1">Find</button>
                        </div>
                        <div class="uk-margin">
                          <p><strong>Temperature:</strong> {{ this.temp }}</p>
                        </div>
                        <div class="uk-margin">
                          <p>
                            <strong>City:</strong> 
                            {{ this.town }}
                          </p>
                        </div>
                      </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
// @ is an alias to /src

export default {
  name: 'home',
  data(){
    return {
      city: '',
      country: '',
      API_KEY: '38fc5110f8bab1bb98b6d239b19f5e79',
      temp: '',
      town: ''
    }
  },
  methods: {
    search(){
       axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=metric&APPID=${this.API_KEY}`)
    .then( ({data}) => {
      console.log(data)
      this.temp  = data.main.temp;
      this.town = data.name;
    })
    .catch(e => {
      console.log(e);
    })
    }
  },
  created(){
  }
}
</script>
<style lang="scss" scoped>
.home {
  background: rgb(226,203,50);
  background: linear-gradient(45deg, rgba(226,203,50,1) 0%, rgba(240,94,94,1) 68%);
}
</style>
