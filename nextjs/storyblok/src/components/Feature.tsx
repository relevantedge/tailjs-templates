import { storyblokEditable } from "@storyblok/react/rsc";

const Feature = ({ blok }: any) => (
  <div className="column feature" {...storyblokEditable(blok)}>
    {blok.name}
    <button>Boom</button>
  </div>
);

export default Feature;
