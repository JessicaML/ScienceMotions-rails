import ReactOnRails from "react-on-rails";

import Container from "../bundles/Container/components/Container";
import Team from "../bundles/Container/components/Team";
import Indicators from "../bundles/Container/components/Indicators";
import DNA from "../bundles/Container/components/DNA";
import Eye from "../bundles/Container/components/Eye";
import Atoms from "../bundles/Container/components/Atoms";
import CellsTissuesOrgans from "../bundles/Container/components/CellsTissuesOrgans";

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  Container,
  Team,
  Indicators,
  DNA,
  Eye,
  Atoms,
  CellsTissuesOrgans
});
