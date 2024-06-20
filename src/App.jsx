import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import InputText from "./components/InputText";
import { Form, Formik } from "formik";
import Button from "./components/Button";
import InputRadio from "./components/InputRadio";
import InputFile from "./components/InputFile";
import Textarea from "./components/Textarea";
import { fields } from "./fields";

function App() {

  const slideRef = useRef()
  const [information, setInformation] = useState(null)

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dragable: true,
    vertical: true,
    arrows: false,
    verticalSwiping: true,
  };

  return (
    <div className="px-5 h-screen">
      <Formik
        initialValues={{
          name: "",
          surname: "",
          gender: "",
          about: "",
          image: "",
        }}
        onSubmit={(values) => setInformation(values)}
      >
        {(props) => {
          
          const clickHandle = () => {
            slideRef.current.slickNext()
          }

          return (
            <Form>
                <Slider {...settings} ref={slideRef}>
                  <div className="w-full h-[95vh] !text-center !flex !items-center !justify-center !flex-col gap-3">
                    <Button onClick={clickHandle}>Start</Button>
                  </div>
                  
                  {
                    fields.map((field, index) => (
                      <div key={index} className="w-full h-[95vh] !flex !items-center !justify-center !flex-col gap-3">
                        { field.type == 'text' && <InputText label={field.label} name={field.name}/> }

                        { field.type == 'select' && <InputRadio label={field.label} name={field.name} options={field.options}/> }

                        { field.type == 'file' && <InputFile name={field.name}/> }

                        { field.type == 'textarea' && <Textarea label={field.label} name={field.name}/> }

                        { props.values[field.name] && <Button type={ index == fields.length - 1 ? 'submit' : 'button' } onClick={clickHandle}>Next</Button> }

                      </div>
                    ))
                  }
                  
                  <div className="w-full h-[95vh] !flex !items-center !justify-center !flex-col gap-3">
                    <pre className="bg-zinc-900 p-5 rounded-md text-xl">{ JSON.stringify(information, null, 2) }</pre>
                  </div>
                </Slider>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default App;
