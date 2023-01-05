import Layout from "@/layouts/index";
import Image from "next/image";
import { useEffect, useState } from "react";

const AboutPage = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.yellotek.com/api/teams?populate%5B0%5D=picture&sort%5B0%5D=order%3Aasc"
    )
      .then((res) => res.json())
      .then((res) => {
        setTeams(res.data);
      });
  }, []);

  return (
    <Layout.Landing>
      <section id="hero">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 my-24">
          <div>
            <h1 className="text-5xl font-medium mb-8">Who we are</h1>
            <p className="mb-4">
              Yello is a multidisciplinary software engineering company with
              over eight years of experience in the startup and enterprise
              world, focusing on helping aspiring entrepreneurs, promising
              startups, and growing companies build their greatest ideas.
            </p>
            <p className="mb-4">
              Our inherent eye for problem-solving reflects seamlessly through
              all aspects of our work and is a massive part of our company`s
              culture; at Yello, we encourage questions and value our team of
              enthusiastic dreamers. We believe our positive approach to work is
              a key differentiator in Yello`s success in producing quality
              first.
            </p>
          </div>
          <div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                fill
                src="https://yellotek.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fyellotek-cdn%2Fimage%2Fupload%2Fv1667877371%2Flarge_meeting_ebc0d21279.png&w=3840&q=75"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="team">
        <div className="container mx-auto">
          <span className="block text-xl font-bold mb-2">Meet the team</span>
          <h2 className="text-5xl max-w-[600px] leading-tight mb-8">
            The creative people behind Yello
          </h2>
          <p className="max-w-[800px]">
            We have worked with analytics, logistics, and crypto platforms to
            innovate ideas that have a global impact. Our mission through it all
            is to give small to midsize businesses access to world-class
            software development.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 mt-8 mb-12">
            {teams.map((team) => {
              console.log(team);
              return (
                <div key={team.id}>
                  <div className="aspect-square relative">
                    <Image
                      fill
                      src={
                        team?.attributes?.picture?.data?.attributes?.formats
                          ?.medium?.url
                      }
                      alt={team?.attributes?.name}
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center pt-4 pb-10">
                    <h5 className="font-bold">{team?.attributes?.name}</h5>
                    <p>{team?.attributes?.role}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout.Landing>
  );
};

export default AboutPage;
