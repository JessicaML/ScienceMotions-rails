import ReactOnRails from "react-on-rails";

import Container from "../bundles/Container/components/Container";
import Team from "../bundles/Container/components/Team";
import Indicators from "../bundles/Container/components/Indicators";
import DNA from "../bundles/Container/components/DNA";
import CellsTissuesOrgans from "../bundles/Container/components/CellsTissuesOrgans";
import CellsTissuesOrgansText from "../bundles/Container/components/text/CellsTissuesOrgansText";

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  Container,
  Indicators,
  Team,
  DNA,
  CellsTissuesOrgans,
  CellsTissuesOrgansText
});
