# SendMo
A Money Transfer Application

By William Chan

## Instructions

1. Navigate to [repo](https://github.com/willchan8/SendMo.git).
2. Clone locally using `git clone https://github.com/willchan8/SendMo.git`
3. Install dependencies using `npm install`
4. Start webpack to compile a bundle.js file `npm run react-dev`
5. In a separate terminal, start your server using `npm start`
6. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).
7. Enjoy!

## Discussion

The technologies I used to build this app include: React, Redux, Webpack, HTML, CSS/Styled Components, and SynapseFI API.

## Notes

- Implemented error handling on both client and server side.
- Application is responsive on both smaller (mobile) and larger (desktop) screen sizes.
- Application deployed on Heroku: [https://sendmoapp.herokuapp.com/](https://sendmoapp.herokuapp.com/).

## Future Implementations

- Allow users to login and logout
- Allow users to create additional nodes
- Use the Synapse "View User Transactions" API to update "transaction" state rather than adding response data from the "Create Transaction" API
