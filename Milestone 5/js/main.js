const { createApp } = Vue;

createApp({
  data() {
    return {
      contacts: [
        {
          name: "Michele",
          avatar: "./img/avatar_1.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il cane?",
              status: "sent",
              isMenuVisible: false,
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Ricordati di stendere i panni",
              status: "sent",
              isMenuVisible: false,
            },
            {
              date: "10/01/2020 16:15:22",
              message: "Tutto fatto!",
              status: "received",
              isMenuVisible: false,
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "./img/avatar_2.jpg",
          visible: true,
          messages: [
            {
              date: "20/03/2020 16:30:00",
              message: "Ciao come stai?",
              status: "sent",
              isMenuVisible: false,
            },
            {
              date: "20/03/2020 16:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              status: "received",
              isMenuVisible: false,
            },
            {
              date: "20/03/2020 16:35:00",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "sent",
              isMenuVisible: false,
            },
          ],
        },
        {
          name: "Samuele",
          avatar: "./img/avatar_3.jpg",
          visible: true,
          messages: [
            {
              date: "28/03/2020 10:10:40",
              message: "La Marianna va in campagna",
              status: "received",
              isMenuVisible: false,
            },
            {
              date: "28/03/2020 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
              isMenuVisible: false,
            },
            {
              date: "28/03/2020 16:15:22",
              message: "Ah scusa!",
              status: "received",
              isMenuVisible: false,
            },
          ],
        },
        {
          name: "Alessandro B.",
          avatar: "./img/avatar_4.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
              isMenuVisible: false,
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Si, ma preferirei andare al cinema",
              status: "received",
              isMenuVisible: false,
            },
          ],
        },
        {
          name: "Alessandro L.",
          avatar: "./img/avatar_5.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ricordati di chiamare la nonna",
              status: "sent",
              isMenuVisible: false,
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Va bene, stasera la sento",
              status: "received",
              isMenuVisible: false,
            },
          ],
        },
        {
          name: "Claudia",
          avatar: "./img/avatar_6.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao Claudia, hai novità?",
              status: "sent",
              isMenuVisible: false,
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Non ancora",
              status: "received",
              isMenuVisible: false,
            },
            {
              date: "10/01/2020 15:51:00",
              message: "Nessuna nuova, buona nuova",
              status: "sent",
              isMenuVisible: false,
            },
          ],
        },
        {
          name: "Federico",
          avatar: "./img/avatar_7.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Fai gli auguri a Martina che è il suo compleanno!",
              status: "sent",
              isMenuVisible: false,
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Grazie per avermelo ricordato, le scrivo subito!",
              status: "received",
              isMenuVisible: false,
            },
          ],
        },
        {
          name: "Davide",
          avatar: "./img/avatar_8.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao, andiamo a mangiare la pizza stasera?",
              status: "received",
              isMenuVisible: false,
            },
            {
              date: "10/01/2020 15:50:00",
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: "sent",
              isMenuVisible: false,
            },
            {
              date: "10/01/2020 15:51:00",
              message: "OK!!",
              status: "received",
              isMenuVisible: false,
            },
          ],
        },
      ],

      activeContact: 0,
      newMessage: "",
      searchQuery: "",
    };
  },

  computed: {
    filteredChats() {
      return this.contacts.map((contact) => {
        if (
          contact.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        ) {
          return { ...contact, visible: true };
        } else {
          return { ...contact, visible: false };
        }
      });
    },
  },
  methods: {
    selectContact(index) {
      this.activeContact = index;
    },

    sendMessage() {
      if (this.activeContact !== null && this.newMessage.trim() !== "") {
        this.contacts[this.activeContact].messages.push({
          date: new Date().toLocaleString(),
          message: this.newMessage.trim(),
          status: "sent",
        });
        this.newMessage = "";
      }

      setTimeout(() => {
        receive = "Ok";
        this.contacts[this.activeContact].messages.push({
          date: new Date().toLocaleString(),
          message: receive.trim(),
          status: "received",
        });
      }, 1000);
    },

    getLastMessageDate(contact) {
      const messages = contact.messages;
      return messages.length
        ? messages[messages.length - 1].date
        : "Nessuna data";
    },

    toggleMenu(messages) {
      messages.isMenuVisible = !messages.isMenuVisible;
    },
  },
}).mount("#app");
