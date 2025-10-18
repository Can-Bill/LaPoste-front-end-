// app/page.tsx
import SearchBar from '@/components/SearchBar';
import Section_one from '@/components/Section_one';
import Section_two from '@/components/Section_two';
import Section_three from '@/components/Section_three';
import Section_four from '@/components/Section_four';
import Section_five from '@/components/Section_five';
import Section_six from '@/components/Section_six';
import Section_seven from '@/components/Section_seven';
import Section_eight from '@/components/Section_eight';
import Section_nine from '@/components/Section_nine';







export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero */}

      <section>
        <Section_one />
      </section>

      <section>
        <Section_two />
      </section>


      <section>
        <Section_three />
      </section>

      <section>
        <Section_four />
      </section>

      <section>
        <Section_five />
      </section>

      <section>
        <Section_six />
      </section>

      <section>
        <Section_seven />
      </section>

      <section>
        <Section_eight />
      </section>

      <section>
        <Section_nine />
      </section>

    </div>
  );
}