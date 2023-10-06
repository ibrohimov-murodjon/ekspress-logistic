
//images
import { emailLogoWhite, callLogoWhite,timeLogoWhite } from '../assets/index'
//components
import { Button, ContactElement, Input, SubText } from '../components'


const contactData = [
  {id:1,
  img:emailLogoWhite,
  title: 'Email',
  text: 'contact@logistics.com'
  },
  {id:2,
    img:callLogoWhite,
    title: 'Call Us',
    text: '(00) 112 365 489'
    },
    {id:3,
      img: timeLogoWhite,
      title: 'Mon - Sat 9.00 - 18.00',
      text: 'Sunday Closed'
      }
]
function Contact() {
  return (
    <div id="#contact" className='bg-[#091242] '>
      <div className='myContainer pt-[80px] pb-[100px] tabletMax:flex tabletMax:flex-col tabletMax:items-center'>
      <SubText title="Contact us" bgclr="#787D95" className="mb-[43px]" />
        <div className="flex items-center justify-between tabletMax:flex-col tabletMax:gap-y-8">
        <div>
        <h1 className='mb-1 text-white w-full max-w-[353px] text-[35px] font-bold font-rubik leading-normal tabletMax:text-center tabletMax:max-w-[400px] mobileMd:w-[350px] mobileMd:text-[28px] mobileMd:leading-snug mobileSm:text-[23px] mobileSm:max-w-[300px]'>Get in touch with us</h1>
        <p className='w-full max-w-[450px] text-white font-medium font-krub leading-[24px] text-[16px] mb-[32px] tabletMax:text-center tabletMax:w-[400px] mobileMd:text-[13px] mobileMd:w-[350px] mobileMd:leading-normal mobileSm:text-[11px] mobileSm:max-w-[300px]'>Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value.</p>
        <div className='flex flex-col gap-y-[30px] tabletMax:justify-center'>
        {contactData.map((item) => {
        return(
          <ContactElement img={item.img} title={item.title} text={item.text} key={item.id}/>
        )
        })}
        </div>
        </div> 
        <form className='flex flex-col gap-y-[3px] mobileMd:flex-col mobileMd:items-center'>
        <Input  type='text' placeholder='Your name*'/> <br />
        <Input type='tel' placeholder='Phone number*'/> <br />
        <textarea 
      id="input-warning"
      className='outline-none w-full placeholder:pl-3 placeholder:text-[#bb9753] px-3 border-[2px] rounded border-[#bb9753] mobileMd:w-[300px] mobileMd:h-[100px] mobileSm:max-w-[250px]' cols="30" rows="5" placeholder='Your Message'></textarea>
        <span className='tabletMax:flex tabletMax:flex-col tabletMax:items-center'>
        <Button  title='Submit Message'/>
        </span>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Contact