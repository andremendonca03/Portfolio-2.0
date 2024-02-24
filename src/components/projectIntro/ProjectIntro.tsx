import Image from "next/image";
import Link from "next/link";

const ProjectIntro = ({data}: {data: {title: string, copy: string, image: string, link: string}}) => {
  
  return (
    <section className="container flex gap-4 flex-wrap md:flex-nowrap">
      <div>
        <h2 className="font-heading3 mb-3">{data.title}</h2>
        <div className="text-r-text-muted" dangerouslySetInnerHTML={{__html: data.copy}}></div>
      </div>

      <Link className="max-w-[600px] w-full" href={data.link}>
        <Image className="w-full" src={data.image} alt={data.title} width={450} height={300} />
      </Link>
    </section>
  )
}

export default ProjectIntro;