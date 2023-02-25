import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

const reducer = (state, action) => {
  switch (action.type) {
    case 'set-name':
      return {
        ...state,
        name: action.payload,
      };
      break;
    case 'set-email':
      return {
        ...state,
        email: action.payload,
      };
      break;
    case 'set-message':
      return {
        state,
        message: action.payload,
      };
      break;

    default:
      return state;
  }
};

export default function HireUsForm() {
  const form = useRef();

  const [formData, dispatch] = useReducer(reducer, {
    name: '',
    email: '',
    subject: 'Hiring Cybernate',
    message: '',
  });

  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_HIRE_SERVICE_ID,
        import.meta.env.VITE_HIRE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_HIRE_PUBLIC_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          navigate('/');
          alert('SUCCESS!');
        },
        (error) => {
          console.log(error.text);
          alert('FAILED...', error);
        }
      );
  };

  return (
    <div className=" min-h-screen container mx-auto mt-6  p-4 flex flex-col space-y-10 justify-center items-center md:p-0">
      <div className="absolute left-[10%] top-[5%]">
        <Link to={'/'}>
          <BsFillArrowLeftCircleFill className=" h-10 w-10 text-grayishLightWhite" />
        </Link>
      </div>

      <h1>
        <span className="text-4xl text-grayishLightWhite mr-2">Hire</span>
        <span className="text-lightGreenishSkyBlue text-5xl font-bold">C</span>
        <span className="text-3xl text-grayishLightWhite font-bold">
          ybernate
        </span>
      </h1>

      <form ref={form} className="flex flex-col space-y-2" onSubmit={sendEmail}>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="flex flex-col space-y-2 w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-darkGrayishLightWhiteOpac text-xs font-bold mb-2"
              for="grid-first-name"
              htmlFor="name"
            >
              Individuals Name or Company Name
            </label>
            <input
              className="appearance-none block w-full bg-transparent text-sm text-grayishLightWhite border border-solid border-grayishLightWhite rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
              type="text"
              name="user_name"
              value={formData.name}
              id="name"
              placeholder="Individual or Company Name"
              onChange={(e) =>
                dispatch({ type: 'set-name', payload: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col space-y-6 w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-darkGrayishLightWhiteOpac text-xs font-bold mb-2"
              htmlFor="email"
            >
              Enter your email
            </label>

            <input
              className="appearance-none block w-full bg-transparent text-sm text-grayishLightWhite border border-solid border-grayishLightWhite rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
              type="email"
              name="user_email"
              value={formData.email}
              id="email"
              placeholder="enter your email"
              onChange={(e) =>
                dispatch({ type: 'set-email', payload: e.target.value })
              }
            />
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <label
            className="block uppercase tracking-wide text-darkGrayishLightWhiteOpac text-xs font-bold mb-2"
            htmlFor="subject"
          >
            Subject
          </label>
          <input
            className="appearance-none block w-full bg-transparent text-sm text-grayishLightWhite border border-solid border-grayishLightWhite rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
            type="text"
            name="user_subject"
            value={formData.subject}
            id="subject"
            placeholder="enter email subject"
          />
        </div>

        <div className="flex flex-col space-y-2 pb-3">
          <label
            className="block uppercase tracking-wide text-darkGrayishLightWhiteOpac text-xs font-bold mb-2"
            htmlFor="email_body"
          >
            Message
          </label>
          <textarea
            className="appearance-none block w-full bg-transparent text-grayishLightWhite border border-solid border-grayishLightWhite rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
            id="email_body"
            rows="5"
            name="message"
            value={formData.message}
            onChange={(e) =>
              dispatch({ type: 'set-message', payload: e.target.value })
            }
          ></textarea>
        </div>

        <button
          className="bg-veryLightGreen mt-8 py-3 px-4 text-center font-medium rounded-full md:py-2 md:rounded-md hover:bg-lightGreenishSkyBlue"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
