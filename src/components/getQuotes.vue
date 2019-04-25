<template>
  <form @submit="validate()" method="POST" action="http://localhost:8080/quotes">

    <section class="top">
      <img src="@/assets/logo.png" class="logo">
      <h1> {{ titleBar }} </h1>
    </section>

    <section>
      <label><h2> Policy Maximum <img src="@/assets/questionmark.png" class="icon"></h2>
        <select v-model="form.policy" required>
          <option value="" selected>Choose your policy maximum</option>
          <option value="50">50,000</option>
          <option value="100">100,000</option>
          <option value="250">250,000</option>
          <option value="500">500,000</option>
        </select>
      </label>
    </section>

    <section>
      <label><h2> Age <img src="@/assets/questionmark.png" class="icon"></h2>
        <table>
          <tr>
            <th> # </th>
            <th> Age </th>
          </tr>
          <tr>
            <td> {{ ageNum }} </td>
            <td>
              <input type="text" v-model="form.age" required>
            </td>
          </tr>
        </table>
      </label>
      <p v-if="err.age.length">
        <b> {{ err.age }} </b>
      </p>
    </section>

    <section>
      <label><h2> Travel Dates (mm/dd/yyyy) <img src="@/assets/questionmark.png" class="icon"> </h2>
        <input type="date" v-model="form.startDate" required>
        <input type="date" v-model="form.endDate" required>
      </label>
      <p v-if="err.startDate.length">
        <b> {{ err.startDate }} </b>
      </p>
      <p v-if="err.endDate.length">
        <b> {{ err.endDate }} </b>
      </p>
    </section>

    <section>
      <label><h2>Citizenship <img src="@/assets/questionmark.png" class="icon"></h2>
        <input
          type="text"
          v-model="form.country"
          placeholder="Choose Your Country of Citizenship"
          class="wide"
          required
        >
      </label>
      <p v-if="err.country.length">
        <b> {{ err.country }} </b>
      </p>
    </section>

    <section>
      <label><h2> Mailing State <img src="@/assets/questionmark.png" class="icon"></h2>
        <input
          type="text"
          v-model="form.state"
          placeholder="Choose State"
          class="wide"
          required
        >
      </label>
      <p v-if="err.state.length">
        <b> {{ err.state }} </b>
      </p>
    </section>

    <section class="bot">
      <button type="submit" class="orange" href="/Quotes">GET QUOTES</button>
      <a href="/" class="italics">Reset Form</a>
    </section>

  </form>
</template>

<script>
export default {
  name: 'getQuotes',
  data () {
    return {
      titleBar: 'Travel Insurance',
      err: {
        startDate: '',
        endDate: '',
        age: '',
        policy: '',
        country: '',
        state: ''

      },
      form: {
        startDate: null,
        endDate: null,
        age: '',
        policy: null,
        country: '',
        state: ''
      }
    }
  },
  computed: {
    ageNum () {
      let x = parseInt(this.form.age)
      if (isNaN(x)) {
        return 1
      } else {
        return x
      }
    }
  },
  methods: {
    validate (e) {
      const symbs = new RegExp(/[~`!#$%^&*+=\-[\]\\';,/{}|\\":<>?]/)
      const numbs = new RegExp(/[0-9]/)
      if (this.ageNum >= 100) {
        this.err.age = 'Age out of range. Please re-enter.'
        event.preventDefault()
      } if (symbs.test(this.form.country) || numbs.test(this.form.country)) {
        this.err.country = 'Letters only, please.'
        event.preventDefault()
      } if (symbs.test(this.form.state) || numbs.test(this.form.state)) {
        this.err.state = 'Letters only, please.'
        event.preventDefault()
      } else {
        this.err.age = ''
        this.err.country = ''
        this.err.state = ''
        this.err.startDate = ''
        this.err.endDate = ''
        return true
      }
    }
  }
}
</script>

<style scoped>

* {
  font-size: 13px;
  text-align: left;
  display: block;
}
main {
  border: 1px solid rgb(202, 202, 202);
  border-radius: 1px;
}

.top {
  background-color: rgb(240, 243, 246);
  display: flex;
}

.logo {
  width: 104px;
  height: 44px;
  margin: 20px;
}

h1 {
  line-height: 58px;
  font-size: 17px;
  font-weight: bold;
  color: rgb(64, 106, 149);
}

select {
  width: 100%;
}

table {
  border: 1px solid rgb(211, 211, 211);
  border-radius: 1px;
  background-color: rgb(236, 236, 236);
}

.icon {
  height: 15px;
  width: 15px;
}

.bot {
  padding: 50px 100px;
}

.orange {
  font-family: "Trebuchet MS",Helvetica,sans-serif;
  background-color: rgb(237,128,41);
  color: rgb(255, 255, 255);
  text-decoration: none;
  text-align: center;
  display: inline-block;
  border-radius: 2px;
  padding: 5px 15px;
  margin: 5px 15px;
}

.italics {
  font-style: italic;
  padding: 5px 15px;
  margin: 5px 15px;
  color: blue;
}

.wide {
  width: 100%;
}

</style>
