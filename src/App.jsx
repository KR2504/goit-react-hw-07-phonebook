import Section from "./components/Section";
import ContactForm from './components/ContactForm'
import Filter from "./components/Filter";
import Contacts from './components/ContactsList'

export default function App() {

  return (
    <div
      style={{
        height: '100vh',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <Filter />
        <Contacts />
      </Section>
    </div>
  );
} 