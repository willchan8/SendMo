# SendMo
A Money Transfer Application

By William Chan

## Instructions

1. Navigate to [repo](https://github.com/willchan8/payrange).
2. Open a terminal and clone locally using `git clone https://github.com/willchan8/payrange`.
3. Change into the target directory using `cd payrange`. 
4. Install dependencies using `npm install`.
5. Start your server using `npm start`, which should also open `http://localhost:3000` in your default browser.
6. Enjoy!

## Discussion

The technologies I used to build this app include: React, Redux, Webpack, HTML, CSS/Styled Components, and SynapseFI API Client Library.

## Notes

- Implemented error handling on both client and server side.
- Application is responsive on both smaller (mobile) and larger (desktop) screen sizes.
- Application deployed on Heroku: [https://sendmoapp.herokuapp.com/](https://sendmoapp.herokuapp.com/).

## Future Implementations

- Allow users to login and logout
- Allow users to create additional nodes
- Use the Synapse "View User Transactions" API to update "transaction" state rather than adding response data from the "Create Transaction" API
- Encrypt sensitive information such as passwords and account numbers
- Persist user login info in a database
- Add a transaction chart
