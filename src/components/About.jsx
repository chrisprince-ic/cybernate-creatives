import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'set-email':
      return {
        ...state,
        email: action.payload,
      };
      break;

    case 'set-comment':
      return {
        ...state,
        comment: action.payload,
      };
      break;

    default:
      return state;
  }
};

export default function About() {
  const [formData, dispatch] = useReducer(reducer, {
    email: '',
    comment: '',
  });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_COMMENT_SERVICE_ID,
        import.meta.env.VITE_COMMENT_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_COMMENT_PUBLIC_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          navigate('/');
          alert('Comment sent successfully thanks!!');
        },
        (error) => {
          console.log(error.text);
          alert('Failed sending ! check your connection', error);
        }
      );

    dispatch({ type: 'set-email', payload: '' });
    dispatch({ type: 'set-comment', payload: '' });
  };

  return (
    <div id="about" className="min-h-screen w-full bg-darkGray">
      <div className="container mx-auto pt-32 pb-20 flex flex-col space-y-12 md:flex-row md:space-x-24">
        <div className="flex flex-col space-y-6 md:pt-12">
          <h1 className="text-3xl text-center font-semibold text-grayishLightWhite px-8 md:text-left">
            About us
          </h1>
          <p className="max-w-md text-center text-base px-8 text-paleGrayishLightWhiteOpac md:text-left">
            We are young tech enthusiasts and we operate in Kigali, our goal is
            to bring creativity, style and elegance in our products and always
            offer great services and best tech practices to our clients.
          </p>

          <h3 className="text-lg text-center px-8 text-paleGrayishLightWhiteOpac font-semibold md:text-left">
            Contacts
          </h3>
          <p className="text-center px-8 md:text-left">
            <span className=" italic text-base underline text-darkGrayishLightWhiteOpac">
              <a href="tel:+250789048643">+250789048643</a>
            </span>
            <span className="text-paleGrayishLightWhiteOpac"> /</span>
            <span className="italic text-base underline text-darkGrayishLightWhiteOpac">
              <a href="tel: +250790113329"> +250790113329</a>
            </span>
          </p>
        </div>

        <div className="self-center flex flex-col space-y-4">
          <h3 className="text-center text-3xl text-lightGreenishSkyBlue">
            We Live By Your Feedback
          </h3>

          <form
            className="flex flex-col space-y-4"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="flex flex-col space-y-2">
              <label className="text-grayishLightWhite">Email :</label>
              <input
                className="bg-transparent border border-paleGrayishLightWhiteOpac rounded-md outline-none indent-4 p-2 text-paleGrayishLightWhite"
                type="email"
                value={formData.email}
                name="user_email"
                onChange={(e) =>
                  dispatch({ type: 'set-email', payload: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="text-grayishLightWhite">Comments :</label>
              <textarea
                className="bg-transparent border border-paleGrayishLightWhiteOpac rounded-md outline-none p-4 h-[150px] text-paleGrayishLightWhite"
                id=""
                value={formData.comment}
                name="message"
                cols="30"
                rows="10"
                onChange={(e) =>
                  dispatch({ type: 'set-comment', payload: e.target.value })
                }
              ></textarea>
            </div>

            <button className="bg-lightGreenishSkyBlue py-3 px-4 text-center font-medium rounded-full md:py-2 md:rounded-md hover:bg-veryLightGreen">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
