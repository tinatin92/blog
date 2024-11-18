import { useState } from "react";
import Container from "../ui/container";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";
import i18n from "i18next";
import { Trans } from "react-i18next";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const handleTranslation = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <>
      <header className="border-b">
        <Container>
          <Link to="/">
            {" "}
            <h1 className="font-bold text-2xl">
              <Trans>home-page.logo</Trans>
            </h1>
          </Link>
          <nav className="flex gap-3">
            <Link
              className="text-muted-foreground hover:text-foreground"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-muted-foreground hover:text-foreground"
              to="/"
            >
              Write
            </Link>
            <Link
              className="text-muted-foreground hover:text-foreground"
              to="/"
            >
              About
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
          <div className="relative">
              <Button onClick={() => setSearchIsOpen(!searchIsOpen)}>
                Search
              </Button>

              {searchIsOpen && (
                <div className="absolute top-full left-0  w-96">
                  <Command>
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
                      <CommandEmpty>No results found.</CommandEmpty>
                      <CommandGroup heading="Suggestions">
                        <CommandItem>Calendar</CommandItem>
                        <CommandItem>Search Emoji</CommandItem>
                        <CommandItem>Calculator</CommandItem>
                      </CommandGroup>
                      <CommandSeparator />
                      <CommandGroup heading="Settings">
                        <CommandItem>Profile</CommandItem>
                        <CommandItem>Billing</CommandItem>
                        <CommandItem>Settings</CommandItem>
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </div>
              )}
            </div>
            <Link to="login">
              <Button>Sing In</Button>
            </Link>
            <div>
              <ModeToggle />
            </div>
            <div>
              <div className="relative">
                <Button className="relative" onClick={() => setIsOpen(!isOpen)}>
                  lang
                </Button>
                {isOpen && (
                  <div className="absolute top-full left-0 bg-white border p-2 shadow-md">
                    <button onClick={() => handleTranslation("en")}>eng</button>
                    <button onClick={() => handleTranslation("ka")}>Geo</button>
                  </div>
                )}
              </div>
            </div>

         
          </div>
        </Container>
      </header>
    </>
  );
};
export default Header;
