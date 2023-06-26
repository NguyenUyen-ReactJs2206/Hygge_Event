import { Link } from 'react-scroll'
import { scrollToTop } from 'react-scroll/modules/mixins/animate-scroll'

export default function Test() {
  return (
    <div>
      <div className='long-content text-5xl tracking-widest' id='content'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, architecto illo nihil natus molestiae ea
        officiis. Expedita, cum sit earum labore placeat necessitatibus dolores, reiciendis quos voluptas magni ipsa
        tempora? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt consequuntur cumque aperiam ullam,
        vero repellat distinctio neque, ipsum voluptatem non consectetur error fugit ipsa nulla sint suscipit assumenda
        corporis quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam aliquid possimus officia saepe
        eaque qui nemo delectus minima ullam facilis, nihil fugiat obcaecati quam rerum temporibus voluptatum. Quaerat,
        esse temporibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quibusdam adipisci neque harum
        fugiat omnis dolor! A doloremque voluptate adipisci? Iusto deserunt in voluptatum odio repellat quidem
        laudantium ut odit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam reiciendis illum omnis dolor
        ipsum ad vel beatae cum, molestias molestiae? Unde nesciunt esse eius quod excepturi reiciendis quas culpa
        autem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo enim, nihil, recusandae hic repudiandae
        fugit, nisi ullam odio tenetur officiis obcaecati. Quasi, perspiciatis porro aspernatur incidunt dolor neque
        accusamus! Quibusdam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, architecto illo
        nihil natus molestiae ea officiis. Expedita, cum sit earum labore placeat necessitatibus dolores, reiciendis
        quos voluptas magni ipsa tempora? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        consequuntur cumque aperiam ullam, vero repellat distinctio neque, ipsum voluptatem non consectetur error fugit
        ipsa nulla sint suscipit assumenda corporis quas. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam aliquid possimus officia saepe eaque qui nemo delectus minima ullam facilis, nihil fugiat obcaecati
        quam rerum temporibus voluptatum. Quaerat, esse temporibus? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Impedit quibusdam adipisci neque harum fugiat omnis dolor! A doloremque voluptate adipisci? Iusto deserunt
        in voluptatum odio repellat quidem laudantium ut odit! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ullam reiciendis illum omnis dolor ipsum ad vel beatae cum, molestias molestiae? Unde nesciunt esse eius quod
        excepturi reiciendis quas culpa autem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo enim,
        nihil, recusandae hic repudiandae fugit, nisi ullam odio tenetur officiis obcaecati. Quasi, perspiciatis porro
        aspernatur incidunt dolor neque accusamus! Quibusdam?
      </div>
      <Link activeClass='active' to='content' spy={true} smooth={true} offset={-70} duration={0}>
        <button>BACK TO TOP</button>
      </Link>
    </div>
  )
}
