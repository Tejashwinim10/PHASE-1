const posts = [
  {
    id: '1',
    title: 'Getting Started with React',
    shortDescription: 'An intro to building apps with React.',
    content: `
      <img src="https://reactjs.org/logo-og.png" alt="React Logo" style="width:100%; border-radius: 12px; margin-bottom: 16px;" />
      <p>React is a popular JavaScript library for building dynamic user interfaces. It was developed by Facebook and is used extensively in modern web development.</p>
      <p>React uses a component-based architecture that makes code reusable and easy to maintain. With the help of JSX (JavaScript XML), you can write HTML elements inside JavaScript code, making UI creation seamless.</p>
      <p>To get started, install the <code>create-react-app</code> CLI tool, which sets up everything you need to build a new React application:</p>
      <pre><code>npx create-react-app my-app</code></pre>
      <p>React’s virtual DOM and one-way data flow make rendering efficient and easy to reason about. Once you're comfortable with components and props, you can explore more powerful concepts like hooks, context, and routing.</p>
    `
  },
  {
    id: '2',
    title: 'Understanding Flexbox',
    shortDescription: 'Layout made easy with Flexbox.',
    content: `
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-a_1w_9XZuoRbIZV2gdDHk9z9tS_xcx1sgA_pgtJb2efss2G7Lz_wctm8bn-vV7eBHbI&usqp=CAU" alt="Flexbox Layout" style="width:100%; border-radius: 12px; margin-bottom: 16px;" />
      <p>Flexbox (Flexible Box Layout) is a CSS layout model designed to make it easier to design flexible and responsive layout structures without using float or positioning.</p>
      <p>To start using Flexbox, apply <code>display: flex;</code> to a container. Its direct children (flex items) will now follow Flexbox rules.</p>
      <ul>
        <li><strong>justify-content</strong>: aligns items on the main axis (left to right)</li>
        <li><strong>align-items</strong>: aligns items on the cross axis (top to bottom)</li>
        <li><strong>flex-direction</strong>: sets the direction (row, column, etc.)</li>
      </ul>
      <p>Flexbox is great for components like navbars, cards, and grid-like layouts. It simplifies what was once complex CSS positioning tasks.</p>
    `
  },
  {
    id: '3',
    title: 'Routing in React',
    shortDescription: 'Learn to navigate in React using React Router.',
    content: `
      <img src="https://miro.medium.com/v2/resize:fit:719/1*1oP_IQI1jHei58EV-V5y8A.png" alt="React Router" style=" width:100%; border-radius: 12px; margin-bottom: 16px;" />
      <p>React Router is the standard routing library for React. It enables dynamic routing, allowing users to navigate across views and pages in your application without a full page reload.</p>
      <p>Start by installing it via npm:</p>
      <pre><code>npm install react-router-dom</code></pre>
      <p>Basic routing setup:</p>
      <pre><code>{\`
        import { BrowserRouter, Routes, Route } from 'react-router-dom';

        &lt;BrowserRouter&gt;
          &lt;Routes&gt;
            &lt;Route path="/" element={&lt;Home /&gt;} /&gt;
            &lt;Route path="/post/:id" element={&lt;PostDetail /&gt;} /&gt;
          &lt;/Routes&gt;
        &lt;/BrowserRouter&gt;
      \`}</code></pre>
      <p>You can use <code>useParams()</code> to grab route parameters, making dynamic blog pages easy to build.</p>
    `
  },
  {
    id: '4',
    title: 'State Management in React',
    shortDescription: 'Master state management with useState and context.',
    content: `
      <img src="https://reactjs.org/logo-og.png" alt="State Management" style="width:100%; border-radius: 12px; margin-bottom: 16px;" />
      <p>State management in React is a crucial concept for building interactive applications. React provides two primary ways to manage state: <code>useState()</code> for local component state and <code>Context API</code> for global state management.</p>
      <p>Use the <code>useState()</code> hook to declare and update state within a component:</p>
      <pre><code>const [count, setCount] = useState(0);</code></pre>
      <p>For managing state across many components, you can use the <code>Context API</code>, which allows you to share data without prop-drilling. Here’s a simple example:</p>
      <pre><code>
        const MyContext = createContext();
        
        &lt;MyContext.Provider value={someValue}&gt;
          {/* Components here */}
        &lt;/MyContext.Provider&gt;
      </code></pre>
      <p>State management tools like Redux or Zustand can also be used for larger apps.</p>
    `
  },
  {
    id: '5',
    title: 'Working with Forms in React',
    shortDescription: 'How to manage form data and handle submission.',
    content: `
      <img src="https://reactjs.org/logo-og.png" alt="React Forms" style="width:100%; border-radius: 12px; margin-bottom: 16px;" />
      <p>Forms in React can be tricky, but once you understand how React handles form state, it's straightforward. React provides two main ways to handle forms: controlled components and uncontrolled components.</p>
      <p>In a controlled component, form data is handled by React state:</p>
      <pre><code>
        const [value, setValue] = useState('');

        const handleSubmit = (event) => {
          event.preventDefault();
          alert('Form submitted with value: ' + value);
        };

        return (
          &lt;form onSubmit={handleSubmit}&gt;
            &lt;input type="text" value={value} onChange={(e) => setValue(e.target.value)} /&gt;
            &lt;button type="submit"&gt;Submit&lt;/button&gt;
          &lt;/form&gt;
        );
      </code></pre>
      <p>In uncontrolled components, React does not directly control the form elements. You can use <code>ref</code> to access the input value.</p>
      <p>Here’s an example of an uncontrolled component:</p>
      <pre><code>
        const inputRef = useRef();

        const handleSubmit = () => {
          alert('Form submitted with value: ' + inputRef.current.value);
        };

        return (
          &lt;form onSubmit={handleSubmit}&gt;
            &lt;input type="text" ref={inputRef} /&gt;
            &lt;button type="submit"&gt;Submit&lt;/button&gt;
          &lt;/form&gt;
        );
      </code></pre>
    `
  }
];

export default posts;
