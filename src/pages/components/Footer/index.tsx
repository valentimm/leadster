import ListLinks, { ListLinksProps } from "./components/ListLinks"
import SocialLinks, { SocialLinksProps } from "./components/SocialLinks"
import StyleFooter from "./style"

export default function Footer() {

  const linksPrincipais: ListLinksProps[] = [
    { key: 1, title: "Home", link: "https://leadster.com.br/"},
    { key: 2, title: "Ferramenta", link: "https://facebook.com" },
    { key: 3, title: "Preços", link: "https://leadster.com.br/preco/"},
    { key: 4, title: "Contato", link: "https://leadster.com.br/contato/"},
  ]
  const cases: ListLinksProps[] = [
    { key: 1, title: "Geração de Leads B2B", link: "https://leadster.com.br/estudo-de-caso/"},
    { key: 2, title: "Geração de Leads em Software", link: "https://leadster.com.br/estudo-de-caso/" },
    { key: 3, title: "Geração de Leads em Imobiliária", link: "https://leadster.com.br/estudo-de-caso/"},
    { key: 4, title: "Cases de Sucesso", link: "https://leadster.com.br/estudo-de-caso/"},
  ]
  const materiais: ListLinksProps[] = [
    { key: 1, title: "Blog", link: "https://leadster.com.br/blog/"},
    { key: 2, title: "Parceria com Agências", link: "https://leadster.com.br/agencias-parceiras/" },
    { key: 3, title: "Guia Definitivo do Marketing", link: "https://leadster.com.br/marketing-conversacional/"},
    { key: 4, title: "Materiais Gratuitos", link: "https://leadster.com.br/materiais/"},
  ]
  const socialLinks: SocialLinksProps[] = [
    { key: 1, title: "Linkedin", link: "https://www.linkedin.com/company/leadster-platform/", icon:"linkedin.svg"},
    { key: 2, title: "Facebook", link: "https://www.facebook.com/leadsterplatform", icon:"facebook.svg"},
    { key: 2, title: "Instagram", link: "https://instagram.com", icon:"instagram.svg" },
  ]
  return (
    <StyleFooter>
    <footer>
      <div className="logo">
        <img src="logo.png" alt="Logo" />
        <p>Transformando visitantes em clientes.</p>
      </div>
      <div className="bottomLinks">
        <div className="links">
          <h1>Links Principais</h1>
            {linksPrincipais.map((link) => (
              <ListLinks key={link.key} title={link.title} link={link.link} />
            ))}
        </div>
        <div className="links">
          <h1>Cases</h1>
            {cases.map((link) => (
              <ListLinks key={link.key} title={link.title} link={link.link} />
            ))}
        </div>
        <div className="links">
          <h1>Materiais</h1>
            {materiais.map((link) => (
              <ListLinks key={link.key} title={link.title} link={link.link} />
            ))}
        </div>
        <div className="links">
          <h1>Siga a Leadster</h1>
          <div className="icons">
            {socialLinks.map((link) => (
              <SocialLinks key={link.key} title={link.title} link={link.link} icon={link.icon} />
            ))}
          </div>
          <div className="additionalInfos">
            <p>E-mail: </p><a>contato@leadster.com.br</a>
            <p>Telefone: </p><a>(42) 98828-9851</a>
          </div>
        </div>
      </div>
    </footer>
    <div className="copyright">
      <p>Copyright © 2015 - 2022 Todos os direitos reservados <strong><a href="https://leadster.com.br/">| Leadster</a></strong> </p>
      <p>Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 <strong><a href="https://leadster.com.br/termos_de_uso/">| Termos de uso</a></strong></p>
    </div>
    </StyleFooter>
  )
}