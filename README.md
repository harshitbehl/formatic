![Logo](https://remote-europe.com/sites/default/files/styles/medium_300x300_/public/2021-08/omnipresent.png?itok=hDVlAUq1)

---

# Omnipresent Take Home Task

An interactive web application which makes employee onboarding a breeze. 💨

## 🔗 Live Demo

[Click For Live Demo]("")

## 💻 Run Locally

Clone the project

```bash
  git clone https://github.com/harshitbehl/omnipresent-harshitbehl.git
```

Go to the project directory

```bash
  cd omnipresent-harshitbehl > cd client
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## 🔖 Features

- Interactive sticky header with an animated github source code button & links.
- Beautiful and interactive landing page showcase with animations.
  - Spring animated "Omnipresent" text on hover.
  - SVG Illustration animation on first render.
  - A delayed animated attention grabbing button, which will guide towards the task section.
- Task section with a space ship rocket theme.
  - Modern & attractive form design.
  - Form is interactive and change as we enter inputs.
  - Form validations & errors.
- Modern footer with material themed icons and text.
  - Animated links on hover.

**Note:** Most of the links are dummy links at the moment.

## 📸 Screenshots

**Landing Page & Showcase**

![Landing Page & Showcase](/assets/readmeImages/landingPage.png)

**Form Initial**

![Form Initial](/assets/readmeImages/formInitial.png)

**Form Conditional**

![Form Conditional](/assets/readmeImages/formConditional.png)

**Footer**

![Footer](/assets/readmeImages/footer.png)

## 📌 Tasks Performed

**Requirement Gathering & Analysis**

- Select tech stack to solve the task.
- Setup project boilerplate and install packages, libraries and dependencies.
- Create a scalable directory structure with separation of concerns.

**Design**

- Select & wireframe application layout & design, take inspiration from omnipresent website.
- Select application theme, color pallette & typography.
- Break application into components while ensuring it stays scalable.

**Development (Coding & Implementation)**

- Develop major components: header, showcase, task, footer.
- Add styling, transitions & animations to application components.
- Implement form & form validation.
- Implement redux for global state management to be used in other components in future, if required.
- Implement react routing for easier navigation.

**Testing**

- Manual test each and every field using every possible input and values.
- Add more validations according to possible scenarios.
- Perform unit testing using jest.

**Deployment**

- Create a final build of application.
- Deploy on firebase.

## 📄 Form Task

**Form Fields & Validations:**

- Country Of Work
  - Options: Spain, Ghana, Brazil
  - Country is required
- First Name
  - First name is required
  - Must not exceed 64 characters (Assumption)
- Last Name
  - Last name is required
  - Must not exceed 64 characters (Assumption)
- Date Of Birth
  - Birth date is required
- Holiday Allowance
  - Holiday allowance is required
  - Value must be positive (Assumption)
  - For 'Spain' minimum allowance is 30 days
  - For 'Brazil' maximum allowance is 40 days
  - For 'Ghana' any positive value is allowed (Assumption)
- Marital Status
  - Will only be available for 'Spain' & 'Ghana'
  - Marital status is required
- Social Insurance Number
  - Will only be available for 'Spain'
  - Social Insurance is required
  - Must be only digits (Assumption)
  - Must be exactly 9 digits (Assumption)
- Number Of Children
  - Will only be available for 'Ghana'
  - Number of children is required
  - Value must be positive (Assumption)
- Working Hours
  - Will only be available for 'Brazil'
  - Working hours is required
  - Value must be positive (Assumption)
  - Maximum working hours is 40 (Assumption)

## 🔢 Output & Form Data

- On form submission a POST request to a dummy API is sent which responds with the contents of the post body and a dynamic id property.
- The data will be available in chrome developer tools console.
  ![Form Data](/assets/readmeImages/formData.png)

**API Reference**: https://reqres.in/api/posts

## ⚙️ Tech Stack

**Development:** React, Redux Toolkit, React Router, Axios, JavaScript

**Forms & Form Validations:** Formik, Yup

**Styling:** SASS, CSS

**Animations & Transitions:** Framer Motion, CSS Animations

**Icons:** React Icons

**Testing:** Jest, React Testing Library

**Package Manager:** NPM

**Deployment:**

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Framer](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)

## 👨🏽‍💻 Author

- [@harshitbehl](https://github.com/harshitbehl)
