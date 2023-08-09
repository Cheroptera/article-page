// import React from 'react';
// import { render, screen, waitFor } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import axios from 'axios';
// import { App } from './App';

// jest.mock('axios'); // Mocking axios for API calls

// const mockArticles = [
//   {
//     id: '1',
//     title: 'Article 1',
//     // ... other properties
//   },
//   {
//     id: '2',
//     title: 'Article 2',
//     // ... other properties
//   },
//   // ... more mock articles
// ];

// describe('App', () => {
//   it('fetches and displays articles', async () => {
//     axios.get.mockResolvedValue({ data: mockArticles });

//     render(<App />);

//     await waitFor(() => {
//       expect(screen.getByText('Article 1')).toBeInTheDocument();
//       expect(screen.getByText('Article 2')).toBeInTheDocument();
//       // ... assert other articles
//     });
//   });

//   // Add more tests as needed
// });
