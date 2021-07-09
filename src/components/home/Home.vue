<template>
  <div class="home">
    <PageTitle icon="fa fa-film" main="Filmes e Séries" sub="Catálogo" />
    <div class="home-page-tabs">
      <b-row>        
          <b-col md="2" sm="12">
            <b-form-input v-model="filter" placeholder="Títulos, Gêneros e Pessoas"></b-form-input>
          </b-col>      
          <b-col md="1" sm="12">
            <b-button @click="searchData"><i class="fa fa-search-plus"></i></b-button>
          </b-col>
        <b-col md="5" sm="12">
          <b-container fluid v-model="listData" v-for="data in listData" :key="data" class="mb-2">
              <b-row>
                <b-col>
                  <b-img imageSrc v-bind="mainProps" :src="data.image" fluid alt="Fluid image" width="300" height="300" ></b-img>       
                </b-col>
                <b-col>
                  <b-card :header="data.type == 'F' ? 'Filme' : 'Série'" header-tag="header" :footer="data.cast" footer-tag="footer" :title="data.name" >
                    <b-card-text>{{data.description}}</b-card-text>                    
                  </b-card>
                </b-col>
              </b-row>
          </b-container>
        </b-col>        
      </b-row>
    </div>
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle"
import { baseApiUrl, showError } from '@/global'
import axios from 'axios'

const base64Encode = data =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(data);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

export default {
  name: "Home",
  components: { PageTitle },
  data: function() {
    return {
      filter: '',
      listData: [],
      imageSrc: null,
      mainProps: {
        width: 400,
        height: 400,
      }      
    }
  },
  watch: {
    image(newValue, oldValue) {
    if (newValue !== oldValue) {
        if (newValue) {
        base64Encode(newValue)
            .then(value => {
            this.imageSrc = value;                
            })
            .catch(() => {
            this.imageSrc = null;
            });
        } else {
        this.imageSrc = null;
        }            
      }
    }
  },   
  methods: {
    searchData() {
      const url = `${baseApiUrl}/data/all/${this.filter.toUpperCase()}`
      axios.get(url).then(res => {  
          this.listData = res.data

          for (let ld of this.listData) {
            ld.cast = ''

            for (let a of ld.actors) {
              if (ld.cast != '') {
                ld.cast = ld.cast + ', ' + a.name 
              } else {
                ld.cast = a.name 
              }
            }
          }
      }).catch(showError)   
    },
    loadData() {
      const url = `${baseApiUrl}/data`
      axios.get(url).then(res => {  
          this.listData = res.data

          for (let ld of this.listData) {
            ld.cast = ''

            for (let a of ld.actors) {
              if (ld.cast != '') {
                ld.cast = ld.cast + ', ' + a.name 
              } else {
                ld.cast = a.name 
              }
            }
          }
      }).catch(showError)                      
    }   
  },
  mounted() {
    this.loadData()
  }
}
</script>

<style>
.card {
  background-color: #F4F3EF;  
}

.cardAdmissionTitle {
  font-size: 1.5rem;
  color: #fff;
  font-weight: 100;
  flex-grow: 1;
  text-align: center;  
}

.cardAdmissionContent {
  color: black;
  display: flex;
  align-items: center;
}

.cardUpdates {
  background-color: #44A08D;
}
</style>