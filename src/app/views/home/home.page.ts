import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IntroModalPage } from '../../modal/intro-modal/intro-modal.page'
import { trigger, state, style, animate, transition } from '@angular/animations' 
import { Storage } from '@ionic/storage'

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  animations: [ 
    trigger('scaleIn', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'scale(0.75)'
        }),

        animate('0.2s ease')
      ]),

      transition(':leave', [
        animate(
          '0.2s ease', 
          style({
            opacity: 0,
            transform: 'scale(0.75)'
          })
        )
      ])
    ]),
  ]
})
export class HomePage implements OnInit {

  name: string = ''
  nameSet: boolean = false
  selectedQuote: any = {}

  quotes = [
    {
      text: 'The last three or four reps is what makes the muscle grow. This area of pain divides a champion from someone who is not a champion.',
      author: ' Arnold Schwarzenegger, seven-time Mr. Olympia',
    },
    {
      text: 'Success usually comes to those who are too busy to be looking for it.',
      author: 'Henry David Thoreau, poet and philosopher',
    },
    {
      text: 'All progress takes place outside the comfort zone.',
      author: 'Michael John Bobak, digital artist',
    },
    {
      text: 'The only place where success comes before work is in the dictionary.',
      author: 'Vidal Sassoon, hairstylist and businessman',
    },
    {
      text: 'The clock is ticking. Are you becoming the person you want to be?',
      author: 'Greg Plitt, fitness model',
    },
    {
      text: 'Whether you think you can, or you think you can’t, you’re right.',
      author: 'Henry Ford, industrialist',
    },
    {
      text: 'The successful warrior is the average man, with laser-like focus.',
      author: 'Bruce Lee, actor and martial artist',
    },
    {
      text: 'You must expect great things of yourself before you can do them.',
      author: 'Michael Jordan, basketball player',
    },
    {
      text: 'Action is the foundational key to all success.',
      author: 'Pablo Picasso, visual artist',
    }
  ]

  constructor(
    public modalController: ModalController,
    private storage: Storage
  ) { }

  ngOnInit() {

    this.selectedQuote = this.quotes[this.getRandomInt(this.quotes.length)]

    this.storage.get('name').then(val => {
      if(!val){
        this.presentModal()
      } else {
        this.nameSet = true
        this.name = val
      }
    })
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: IntroModalPage,
    });
    return await modal.present();
  }


}
