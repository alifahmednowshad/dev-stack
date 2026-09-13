# 🚀 Dev Stack Builder

Dev Stack Builder is a responsive React and TypeScript web application
that helps developers explore modern development technologies and build
a personal technology stack. Users can browse technologies, view
information such as rating and difficulty, and add or remove
technologies from their stack.

## ✨ Features

-   🔎 **Explore Technologies** --- Browse frontend, programming language, styling, and tool technologies.
-   🧩 **Build My Own Stack** --- Add technologies to a personal
    stack, remove individual technologies, or remove all selected
    technologies.
-   📱 **Responsive & Interactive UI** --- Works across desktop, tablet,
    and mobile screens with toast notifications for user actions.

## 🛠️ Technologies Used

-   **React.js**
-   **TypeScript**
-   **Tailwind CSS**
-   **DaisyUI**
-   **React-Toastify**
-   **JSON**
-   **Vite**

## 📂 Project Structure

``` text
src/
├── components/
│   ├── Navbar.tsx
│   ├── Bannar.tsx
│   ├── Technologies.tsx
│   ├── TechnologyCard.tsx
│   ├── MyStack.tsx
│   └── Footer.tsx
│
├── types/
│   └── technology.ts
│
├── assets/
├── App.tsx
├── main.tsx
└── index.css

public/
└── data/
    └── technologies.json
```

## ⚙️ How It Works

The technology information is stored in `public/data/technologies.json`.
The application loads this data with `fetch()` inside the `useEffect`
hook.

Each technology is displayed through the reusable `TechnologyCard`
component. When the user clicks **Add to Stack**, the selected
technology is stored in React state and displayed in the **Your Stack**
section.

A technology cannot be added twice. After it is added, the button
changes to **✓ Added to Stack** and becomes disabled.

Users can remove one technology with the `×` button or clear the
complete stack with **Remove All**.

React-Toastify provides feedback when technologies are added,
duplicated, removed, or when all technologies are removed.

## ▶️ Run the Project Locally

``` bash
git clone https://github.com/alifahmednowshad/dev-stack/
cd dev-stack-builder
npm install
npm run dev
```

Then open the local development URL shown by Vite.

## 📌 React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX is a syntax that lets us write HTML-like code inside JavaScript or
TypeScript. It makes React components easier to read and helps describe
what should appear on the screen.

### 2. What is the difference between props and state?

**Props** are data passed from a parent component to a child component.
**State** is data managed inside a component that can change over time
and update the UI.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` stores changing data in a React component. In this project,
it is used in `Technologies.tsx` to store the technology list, selected
stack, and loading status.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs side effects after a component renders. I used it to
fetch the technology data from `technologies.json` when the Technologies
component loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

React uses the `key` to identify each item in a list. A unique key helps
React efficiently update the correct item when the list changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI depending on a
condition. I used it to show an empty-stack message when no technology
has been selected:

``` tsx
{stack.length === 0 ? (
  <p>My stack is empty.</p>
) : (
  <StackItems />
)}
```

I also use conditional rendering for the loading state.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using **props**. A child can send
information back by calling a function passed by the parent as a prop.

In this project, `Technologies.tsx` passes a technology and an `onAdd`
function to `TechnologyCard`. When the user clicks the button,
`TechnologyCard` calls `onAdd(technology)`.

## 📸 Project Highlights

### Technology Cards

Each card displays:

-   Technology icon
-   Technology name
-   Badge
-   Description
-   Category
-   Difficulty
-   Rating
-   Add to Stack button

### My Stack

The stack section displays:

-   Selected technology count
-   Technology icon and name
-   Technology category
-   Individual remove button
-   Remove All button
-   Empty-stack message

## 📱 Responsive Design

-   **Desktop:** Three technology cards per row with the stack sidebar.
-   **Tablet:** Two technology cards per row.
-   **Mobile:** One technology card per row with a responsive navigation
    menu.

## 🔔 Notifications

React-Toastify is used for:

-   Technology added successfully
-   Duplicate technology warning
-   Technology removed
-   All technologies removed
-   Technology loading error

## 🌐 Live Links

-   **GitHub Repository Link:**  https://github.com/alifahmednowshad/dev-stack/
-   **Live Site Link:**   https://i-dev-stack.netlify.app/

## 👨‍💻 Author

**Alif Ahmed Nowshad**

Built as an educational React and TypeScript project.

------------------------------------------------------------------------
