import { MovieSeatReservationPage } from './app.po';

describe('movie-seat-reservation App', () => {
  let page: MovieSeatReservationPage;

  beforeEach(() => {
    page = new MovieSeatReservationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
