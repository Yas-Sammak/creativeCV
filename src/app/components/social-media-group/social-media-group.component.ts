import { Component } from '@angular/core';

@Component({
  selector: 'app-social-media-group',
  templateUrl: './social-media-group.component.html',
  styleUrls: ['./social-media-group.component.css']
})
export class SocialMediaGroupComponent {
  socialMediaList = [
    { name: 'Facebook', link: 'https://www.facebook.com/', icon: 'fab fa-facebook-f' },
    { name: 'Twitter', link: 'https://twitter.com/', icon: 'fab fa-twitter' },
    { name: 'Instagram', link: 'https://www.instagram.com/', icon: 'fab fa-instagram' },
    // Add more social media platforms as needed
  ];

}
