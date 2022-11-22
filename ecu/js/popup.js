/*
button IDs:
governing - 0
director - 1
supports - 2
goals - 3
patrons - 4
materials - 5
services - 6

information filling:
K12 - 0
public - 1
academic - 2
compared - 3
*/

const responses = {
  "governing": {
    "K12": "The group that school libraries report to include the school administration, school boards, and certain instructional agencies.",
    "public": "Public libraries report to the level of government that funds them with tax dollars – citizens have input through systems such as a board of trustees, as well as outside funders.",
    "academic": "Depending on the type of academic institution, both report to the institution itself and the administration (CARLI), public reports to the government as well. Both impacted with the expectation of providing proper resources by the general public (Rubin, Rubin, & Alire, pp.172).",
    "compared": "The three types all require outside funding, with a great emphasis on the resources provided and the value of those resources. It is common to report to a group, often separated between types of reports. For all libraries, their overarching institutional placement determines the governing authority. There are varying levels of citizen involvement, ranging from direct impact to distant effects.",
  },
  "director": {
    "K12": "The leader of the library reports to the school and district authorities, in addition to the school board.",
    "public": "The government at the level of the institution.",
    "academic": "Reports to university administration and governing bodies as necessary. (CARLI)",
    "compared": "Each type of library has a drastically different group reported to – often similar in organisation of hierarchy, but different with how the institution is structured.",
  },
  "goals": {
    "K12": "The role of a school library is to promote and encourage further exploration and education; to provide support and technical services for teachers; and to lead students to engage in curriculum.",
    "public": "A public library has the goal of serving their community by “meet(ing) … educational, informational, recreational, and cultural needs” (Rubin, Rubin, & Alire, pp. 107) through materials, services, and other resources. Additional goals public libraries often take on are increasing diversity, promoting “civic engagement” and being “community hubs” (Rubin, Rubin, & Alire, pp. 107).",
    "academic": "Academic libraries' goals align with the university mission – primarily by impressing values on the academic community they work with through the spread of knowledge, security as well as privacy, working together, and improving access to information.",
    "compared": "Both K12 and academic libraries are focused on encouraging further education, whereas public and academic libraries also try to fulfill community needs such as being community centers.",
  },
  "patrons": {
    "K12": "Students and teachers",
    "public": "Any community members in the area, depending on what level of public library it is – branch libraries, city or county libraries, state libraries, or even national libraries",
    "academic": "Students, researchers, and faculty of the institution",
    "compared": "Libraries always serve a specific community and this is where the purpose is drawn from.",
  },
  "materials": {
    "K12": "Online resources, print and digital collections",
    "public": "Print and AV materials, digital collections, resource and data collections",
    "academic": "Print materials, e-books, media (physical and digital), databases, and journals, along with institution-specific collections",
    "compared": "Libraries still collect physical collections, but over time the reliance on the internet for connection has increased drastically due to the speed at which online and digital information can be accessed.",
  },
  "services": {
    "K12": "Makerspaces; a communal learning environment; instruction on research strategies; programs on educational progression; teacher support; technology instructional support",
    "public": "Communal space; free access to educational resources, materials, technology, internet; programs for entertainment, education, and social needs; quiet spaces for projects; other community support services; reference interview services",
    "academic": "Reference interview services; communal space; research resources; guidance for many academic needs; tutoring services; learning spaces",
    "compared": "Libraries integrate technologies and introduce new experiences to those they work with – from Makerspaces to activities that explore new ideas, they provide opportunities for new knowledge.",
  },
  "supports": {
    "K12": "Mostly independent; may function in connection with local public libraries through certain programs developed such as allowing public library use with student IDs",
    "public": "Some public libraries are embedded in a larger system, be it within the area they are connected to, or within other forms of systems - such as libraries that opt to work together for the benefit of their communities, or libraries that are in a certain area that often shares its population.",
    "academic": "Generally quite independent within the university system they are in, with access to ILL processes as needed.",
    "compared": "Depending on the functions of the library and user needs, dependencies on other libraries greatly vary.",
  },
};

function filler(ID) {
  document.getElementById("K12").innerHTML = grabText(ID, "K12");
  document.getElementById("public").innerHTML = grabText(ID, "public");
  document.getElementById("academic").innerHTML = grabText(ID, "academic");
  document.getElementById("compared").innerHTML = grabText(ID, "compared");
  document.getElementById("which-button-clicked").innerHTML = document.getElementById(ID).innerHTML;
}

function grabText(ID, location) {
  return responses[ID][location];
}
