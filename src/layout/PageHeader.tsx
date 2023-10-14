import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react"
import { Button } from "../component/Button";
import logo from "../assets/Logo.png"
import { useState } from "react";
import { useSidebarContext } from "../contexts/SidebarContext";

export  function PageHeader () {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false)
  const togal =() => {
    setShowFullWidthSearch(true)
  }
  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
        <PageHeaderFirstSection hidden={showFullWidthSearch}/>

      <form className={` gap-4 justify-center flex-grow ${showFullWidthSearch ? "flex" : "hidden md:flex"}`}>
        {showFullWidthSearch && <div>
          <Button className="flex-shrink-0" onClick={()=> setShowFullWidthSearch(false)} type="button" variant="ghost" size="icon">
            <ArrowLeft />
          </Button>
          </div>}
          <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
          />
          <Button className="py-2 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0">
            <Search />
          </Button>
        </div>
        <Button type="button" size="icon" className="flex-shrink-0">
          <Mic />
        </Button>
      </form>

      <div className={`${showFullWidthSearch ? "hidden" : "flex"} flex-shrink-0 md:gap-4`}>
        <Button variant="ghost" size="icon" onClick={togal} className="md:hidden">
          <Search />
        </Button>
        <Button variant="ghost" size="icon" >
          <Upload />
        </Button>
        <Button variant="ghost" size="icon" >
          <Bell />
        </Button>
        <Button variant="ghost" size="icon" >
          <User />
        </Button>
      </div>
    </div>
  );
}



type PageHeaderFirstSectionProps = {
  hidden?: boolean
}

export function PageHeaderFirstSection({
  hidden = false,
}: PageHeaderFirstSectionProps) {
  const { toggle } = useSidebarContext()

  return (
    <div
      className={`gap-4 items-center flex-shrink-0 ${
        hidden ? "hidden" : "flex"
      }`}
    >
      <Button onClick={toggle} variant="ghost" size="icon">
        <Menu />
      </Button>
      <a href="/">
        <img src={logo} className="h-6" />
      </a>
    </div>
  )
}
