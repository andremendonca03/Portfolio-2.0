import Image from "next/image";
import Link from "next/link";

const ProjectIntro = ({data}: {data: {title: string, copy: string, image: string, link: string}}) => {
  
  return (
    <section className="container flex gap-4 flex-wrap md:flex-nowrap justify-between">
      <div>
        <h2 className="font-heading3 mb-3">{data.title}</h2>
        <div className="text-r-text-muted max-w-[600px]" dangerouslySetInnerHTML={{__html: data.copy}}></div>
      </div>

      <Link className="block w-full max-w-[600px]" target={"_blank"} href={data.link}>
        <Image className="w-full h-auto aspect-[13/6] object-cover rounded-md" src={data.image} alt={data.title} width={600} height={300} quality={100} />
      </Link>
    </section>
  )
}

export default ProjectIntro;