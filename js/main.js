const { createApp } = Vue;
const { DateTime } = luxon;

createApp({
  data() {
    return {
        // risposta mex vuoto
        replay : true,
        // nuova data
        newDay : DateTime.now().toLocaleString(DateTime.DATE_SHORT),
        newTimeMex : DateTime.now().toLocaleString(DateTime.TIME_24_WITH_SECONDS),
        // Ricerca
        searchInput : "",
        // Chat attive
        activeChat : 0,
        // Icon click:
        counterClick: 0,
        // Notifiche On Off
        notOnOff : false,
        // Nuovo mex
        newMex : "",
        // Contatti
        contacts: [
            {
                name: 'Michele',
                avatar: './img/avatar_1.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: './img/avatar_2.jpg',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: './img/avatar_3.jpg',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Alessandra B.',
                avatar: './img/avatar_4.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Anna L.',
                avatar: './img/avatar_5.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Claudia',
                avatar: './img/avatar_6.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Federico',
                avatar: './img/avatar_7.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Davide',
                avatar: './img/avatar_8.jpg',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                    }
                ],
            }
        ],
        // Risposte automatiche
        risposte_boolzapp : [
            "Ciao! Come stai?",
            "Tutto bene, grazie. E tu?",
            "Che fai di bello oggi?",
            "Hai programmi per il weekend?",
            "Sì, certo! Ci vediamo più tardi.",
            "Mi dispiace, oggi sono occupato/a.",
            "Perfetto, a che ora ci vediamo?",
            "Va bene, fammi sapere quando arrivi.",
            "Grazie mille!",
            "Non vedo l'ora!",
            "Hai bisogno di aiuto con qualcosa?",
            "Fammi sapere se hai bisogno di altro.",
            "Ci sentiamo più tardi!",
            "Sto lavorando, ti scrivo dopo.",
            "Buonanotte, a domani!",
            "Che ne dici di un caffè domani?",
            "Ti aggiorno appena ho notizie.",
            "Sembra interessante!",
            "Sto uscendo, ci sentiamo dopo.",
            "Ottima idea!",
            "Va bene, a dopo.",
            "Capisco, non preoccuparti.",
            "Grazie per avermi avvisato.",
            "A presto!",
            "Scusa, non posso rispondere adesso.",
            "È stato un piacere parlare con te.",
            "Sì, certo, nessun problema.",
            "D'accordo, fammi sapere.",
            "Sei sicuro/a?",
            "Perfetto, ci sentiamo più tardi."
        ],
        iconsMenu : [
            {   
                icons : false,
                setting1 : "Cerca tra i contatti",
            },

            {   
                icons : false,
                setting1 : "Aggiungi un'immagine",
                setting2 : "Aggiungi un video",
                setting3 : "Aggiungi un altro tipo difile",
                

            },
            {   
                icons : false,
                setting1 : "Salva Chat",
                setting2 : "Aggiungi ai Preferiti",
                setting3 : "Elimina Chat",
             
            },

        ]

        
        
        }
    },
    methods : {
        sendMex(){
            // nuova data
            this.newDay = DateTime.now().toLocaleString(DateTime.DATE_SHORT)
            this.newTimeMex = DateTime.now().toLocaleString(DateTime.TIME_24_WITH_SECONDS)
            let dataMex = this.contacts[this.activeChat].messages
            console.log(dataMex)
            // Condizione per invio mex
            if(this.newMex.length === 0){
                this.replay = false
            } else {
                dataMex.push({
                    date: this.newDay + " " + this.newTimeMex,
                    message: this.newMex,
                    status: 'sent',
                })
                this.replay = true
            }


            this.newMex = ""
            setTimeout(this.autoReplay, 2000)
            
            // console.log("arry di dati messaggi dopo push", dataMex)
    
            },
// Elimina mex
            canc(i){
                console.log("hai cliccato")
                let dataMex = this.contacts[this.activeChat].messages
                let mexCancelled = {message : "Questo messaggio è stato eliminato"}
                let actualMex = this.contacts[this.activeChat].messages[i]
                dataMex.splice(i,1,)
            },

// Elimina chat
            cancChat(){
                let actualChat = this.contacts[this.activeChat].messages
                console.log(actualChat)
                actualChat.splice(0,actualChat.length -1)
                console.log(this.contacts)
            },

// Risposta automatica
        autoReplay(){
            this.newDay = DateTime.now().toLocaleString(DateTime.DATE_SHORT)
            this.newTimeMex = DateTime.now().toLocaleString(DateTime.TIME_24_WITH_SECONDS)
            let dataMex = this.contacts[this.activeChat].messages
            if (this.replay === false){

            } else {
                dataMex.push({
                    date: this.newDay + " " + this.newTimeMex,
                    message: this.risposte_boolzapp[Math.floor(Math.random() * this.risposte_boolzapp.length - 1)],
                    status: 'received'
                })
            }

        },
// Notify On Off

        notifyToggle(){
            this.notOnOff = !this.notOnOff
        },

        displayChat(i){
            this.activeChat = i
        },

        searchUsers(){
            console.log("stai cercando")
            for (i in this.contacts) {
                if (this.contacts[i].name.includes(this.searchInput)){
                    console.log(this.contacts[i].name)
                    this.contacts[i].visible = true
                } else {
                    this.contacts[i].visible = false
                }
                
            }
        },

        luxonTime(timeToFormat) {
            const newTime = DateTime.fromFormat(timeToFormat, 'dd/MM/yyyy HH:mm:ss');
            return newTime.toFormat('HH:mm:ss');
        },

        displayMenuIcon(num){
            this.iconsMenu[num].icons = ! this.iconsMenu[num].icons  
        }

    },
    mounted() {
        console.log(this.newDay + " " + this.newTimeMex)
    }

  
}).mount('#app')




// Problema se si cancella tutto l'arrey di mex