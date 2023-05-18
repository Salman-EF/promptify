import promptImg from '../assets/img/prompt.png';
import avatar from '../assets/img/avatar.png';

export interface Prompt {
   title: string;
   imageSrc: string;
   topics: string[];
   user: { 
      avatar: string, 
      name: string
   } 
}

export const promptsList:Prompt[] = [
   { 
      title: 'UX/UI Designer v2.1 - Rachel Johnson', 
      imageSrc: promptImg, 
      topics: ['Writer','Books','Drama','Story'], 
      user: { 
         avatar: avatar, 
         name: 'John Bananus' 
      } 
   },
   { 
      title: 'UX/UI Designer v2.1 - Rachel Johnson', 
      imageSrc: promptImg, 
      topics: ['Writer','Books','Drama','Story'], 
      user: { 
         avatar: avatar, 
         name: 'John Bananus' 
      } 
   },
   { 
      title: 'UX/UI Designer v2.1 - Rachel Johnson', 
      imageSrc: promptImg, 
      topics: ['Writer','Books','Drama','Story'], 
      user: { 
         avatar: avatar, 
         name: 'John Bananus' 
      } 
   }
]