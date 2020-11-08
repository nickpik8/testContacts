<template>
  <div id="contacts">
    <div class="logout">
      <span> {{ userName.email }} </span>
      <a @click.prevent="logout" href="#">
        Выйти
      </a>
    </div>
    <div class="group-form">
      <FormSearch 
        @search-contact="searchContact"
      />
      <FormAddContact 
        @add-contact="addContact"
      />
    </div>
    <h1>Список контактов</h1>
    <Loader v-if="loading"/>
    <ContactsList 
      v-else-if="filterContacts.length"
      :contacts="filterContacts"
      @edit-contact="editContact"
      @remove-contact="removeContact"
    />
    <span v-else class="not-found">Ничего не найдено!</span>
  </div>
</template>
<script>
import FormSearch from '@/components/form/FormSearch'
import FormAddContact from '@/components/form/FormAddContact'
import ContactsList from '@/components/contacts/ContactsList'
import Loader from '@/components/Loader'
import firebase from 'firebase/app'
export default {
  data(){
    return{
      contacts: [],
      loading: true,
      searchText: '',
      userName: firebase.auth().currentUser
    }
  },
  computed: {
    filterContacts(){
      if(this.searchText){
        let foundContactsName = this.contacts.filter(contact => contact.name.toLowerCase().includes(this.searchText));
        return foundContactsName.concat(this.contacts.filter(contact => contact.email.toLowerCase().includes(this.searchText)));
      }
      else{
        return this.contacts;
      }
    }
  },
  methods: {
    async logout(){
      try{
        await this.$store.dispatch('logout');
        this.$router.push('/')
      }
      catch(e){}
    },
    searchContact(text){
      this.searchText = text;
    },
    addContact(newContact){
      this.contacts.push(newContact);
      fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        body: JSON.stringify(newContact),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then(response => {
          if (response.ok){
            console.log("Контакт успешно добавлен!");
            return response.json();
          }
        })
        .then(json => console.log(json))
        .catch(error => conosle.error(error));
    },
    editContact(editItem){
      this.contact = this.contacts.map(contact => {
        if (contact.id == editItem.id) 
          contact = editItem
      });
      fetch('https://jsonplaceholder.typicode.com/comments/' + editItem.id, {
        method: 'PUT',
        body: JSON.stringify(editItem),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then(response => {
        if (response.ok)
          console.log("Запись успешно изменена!");
      })
      .catch(error => console.error(error));
    },
    removeContact(id){
      this.contacts = this.contacts.filter(contact => contact.id != id);
      fetch('https://jsonplaceholder.typicode.com/comments/' + id,
      {
        method: 'DELETE'
      })
      .then(response => {
        if (response.ok) 
          console.log('Контакт успешно удален!')
        })
      .catch(error => conosle.error(error));
    }
  },
  mounted(){
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=30')
    .then(response => response.json())
    .then(json => {
      //Просто обрезаю имена (так как очень длинные строчки в данных попадаются), для красоты)
      json = json.map(item => {
          item.name = item.name.slice(0, 30);
          return item;
        });
      this.contacts = json;
      console.log(this.contacts);
      this.loading = false;
    })
    .catch(error => {console.error(error)});
    console.log(this.userName.email)
  },
  components: {
    ContactsList, Loader, FormAddContact, FormSearch
  }
}
</script>
<style lang="scss" scoped>
#contacts{
  display: flex;
  flex-direction: column;
}
h1{
  margin-top: .5rem;
  margin-bottom: .5rem;
}
.group-form{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media(max-width: 767px){
    align-items: center;
  }
}
.logout{
  background-color: #e8e8e8;
  height: 2rem;
  min-width: 200px;
  margin-left: auto;
  padding-top: .5rem;
}
.logout a{
  color: #000000;
  font-size: 1.2em;
  margin-left: 1rem;
}
.logout a:hover{
  color: #888;
}
.not-found{
  display: block;
  margin: 1rem;
  font-weight: 700;
}
</style>
