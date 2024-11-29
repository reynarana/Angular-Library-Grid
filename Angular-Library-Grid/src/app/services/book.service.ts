import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { Book } from '../Models/book.model';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[] = [
    {
      id: 1,
      name: 'The Power of Now',
      description: 'A guide to spiritual enlightenment and living in the present moment.',
      price: 219.99,
      image: 'assets/The Power of Now.jpg',
      category: 'Book',
    },
    {
      id: 2,
      name: 'Man’s Search for Meaning',
      description: 'public/assets/Daring Greatly.png public/assets/Man’s Search for Meaning.jpg',
      price: 315.99,
      image: 'assets/Man’s Search for Meaning.jpg',
      category: 'Book',
    },
    {
      id: 3,
      name: 'Atomic Habits',
      description: 'A book on building good habits and breaking bad ones for a better life.',
      price: 324.99,
      image: 'assets/Atomic Habits.png',
      category: 'Book',
    },
    {
      id: 4,
      name: 'The Four Agreements',
      description: 'A practical guide to personal freedom based on ancient Toltec wisdom.',
      price: 314.99,
      image: 'assets/The Four Agreements.jpg',
      category: 'Book',
    },
    {
      id: 5,
      name: 'Meditations',
      description: 'A collection of personal writings by Marcus Aurelius on stoic philosophy.',
      price: 212.99,
      image: 'assets/Meditations.jpg',
      category: 'Book',
    },
    {
      id: 6,
      name: 'The Subtle Art of Not Giving a F*ck',
      description: 'A counterintuitive approach to living a good life by focusing on what matters.',
      price: 322.99,
      image: 'assets/content.jpg  ',
      category: 'Book',
    },
    {
      id: 7,
      name: 'Daring Greatly',
      description: 'A book on the power of vulnerability and building meaningful connections.',
      price: 218.99,
      image: 'assets/Daring Greatly.png',
      category: 'Book',
    },
    {
      id: 8,
      name: 'How to Win Friends and Influence People',
      description: 'A timeless classic on building interpersonal skills and leadership.',
      price: 316.99,
      image: 'assets/How to Win Friends and Influence People.jpg',
      category: 'Book',
    },
    {
      id: 9,
      name: 'The Art of Happiness',
      description: 'Insights from the Dalai Lama on living a happy and fulfilled life.',
      price: 204.99,
      image: 'assets/The Art of Happiness.jpg',
      category: 'Book',
    },
    {
      id: 10,
      name: 'Grit',
      description: 'A book exploring the power of passion and perseverance in achieving success.',
      price: 210.99,
      image: 'assets/Grit.jpg',
      category: 'Book',
    },
  ];

  getBooks(): Observable<Book[]> {
    return of(this.books);
  }

  addBook(book: Book): Observable<Book> {
    this.books.push(book);
    return of(book);
  }
}

