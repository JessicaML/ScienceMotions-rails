import ReactOnRails from "react-on-rails";

import Container from "../bundles/Container/components/Container";
import Team from "../bundles/Container/components/Team";
import Indicators from "../bundles/Container/components/lessons/Indicators";
import DNA from "../bundles/Container/components/lessons/DNA";
import Eye from "../bundles/Container/components/lessons/Eye";
import Atoms from "../bundles/Container/components/lessons/Atoms";
import CellsTissuesOrgans from "../bundles/Container/components/lessons/CellsTissuesOrgans";
import Sound from "../bundles/Container/components/lessons/Sound";
import Classification from "../bundles/Container/components/lessons/Classification";
import StatesOfMatter from "../bundles/Container/components/lessons/StatesOfMatter";

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  Container,
  Team,
  Indicators,
  DNA,
  Eye,
  Atoms,
  CellsTissuesOrgans,
  Sound,
  Classification,
  StatesOfMatter
});
