
<template>
  <div class="hello">
    <h1>RankerList</h1>
    <div v-for = 'ranker in rankers' :key = "ranker.name" class = 'ranker'>
      <strong>{{ranker.name}}</strong>
      <p>{{ranker.score}}</p>
    </div>
  </div>
</template>

<script>
export default {
  /* eslint-disable*/
  name: 'HelloWorld',
  created () {
      this.$http.get('http://localhost:765/main')
      .then((response) => {
      this.rankers = response.data
      console.log(this.rankers)
    })
  },
  data () {
    return {
      rankers: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
