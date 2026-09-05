import { Map, Mail, MapPin, Phone } from 'lucide-react'
import Seo from '../../components/seo/Seo'
import ContactForm from '../../components/sections/ContactForm'
import PageHeader from '../../components/sections/PageHeader'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'
import SocialLinks from '../../components/ui/SocialLinks'
import { WhatsAppIcon } from '../../components/ui/SocialIcons'
import { CONTACT, SITE } from '../../config/site.config'

function ContactDetail({ icon: Icon, label, value, href }) {
  const isConfigured = value && value !== '[POR COMPLETAR]'

  return (
    <div className="flex items-start gap-3">
      <Icon className="text-primary-600 shrink-0 mt-0.5" size={20} aria-hidden="true" />
      <div>
        <p className="text-xs uppercase tracking-wide text-text-muted">{label}</p>
        {isConfigured && href ? (
          <a href={href} className="text-sm text-primary-900 hover:text-primary-600">
            {value}
          </a>
        ) : (
          <p className={`text-sm ${isConfigured ? 'text-primary-900' : 'italic text-text-muted'}`}>
            {value}
          </p>
        )}
      </div>
    </div>
  )
}

function Contacto() {
  return (
    <>
      <Seo
        title="Contacto"
        description={`Escríbenos a ${SITE.legalName}, ${SITE.location.city}, ${SITE.location.department}.`}
        path="/contacto"
      />

      <PageHeader
        eyebrow="Contacto"
        title="Hablemos"
        description="¿Tienes una pregunta, una idea de alianza o quieres conocer más sobre nuestro trabajo? Escríbenos."
      />

      <section className="bg-bg">
        <div className="max-w-[var(--fulgor-container-max)] mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card className="p-8">
              <ContactForm />
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 space-y-5">
              <Button variant="whatsapp" icon={WhatsAppIcon} href={CONTACT.whatsappUrl} fullWidth>
                Escríbenos por WhatsApp
              </Button>

              <ContactDetail
                icon={MapPin}
                label="Ubicación"
                value={`${CONTACT.address.line1}, ${CONTACT.address.line2}, ${CONTACT.address.cityLine}`}
              />
              <ContactDetail
                icon={Mail}
                label="Correo"
                value={CONTACT.email}
                href={`mailto:${CONTACT.email}`}
              />
              <ContactDetail
                icon={Phone}
                label="Teléfono"
                value={CONTACT.phone1Display}
                href={`tel:+57${CONTACT.phone1}`}
              />
              <ContactDetail
                icon={Phone}
                label="Teléfono"
                value={CONTACT.phone2Display}
                href={`tel:+57${CONTACT.phone2}`}
              />
              <div>
                <p className="text-xs uppercase tracking-wide text-text-muted mb-2">Síguenos</p>
                <SocialLinks className="text-primary-700" withWhatsapp={false} />
              </div>
            </Card>

            <Card className="p-6 flex flex-col items-center justify-center text-center aspect-square">
              <Map className="text-primary-300 mb-3" size={32} aria-hidden="true" />
              <p className="text-sm text-text-muted italic">
                [Mapa próximamente — ubicación en {SITE.location.city}]
              </p>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contacto
