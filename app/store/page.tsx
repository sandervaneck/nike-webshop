"use client";
import { useState } from "react";
import AppBarContainer from "../components/appBar";
import { Cart } from "../components/constants/Types";
import { ProductStore } from "./components/Store";
import { numberOfItems } from "./components/cart/functions";
import { CartDialog } from "./components/cart";
import {
  CookiesPolicy,
  CopyRight,
  EulaPolicy,
  PrivacyPolicy,
  ReturnPolicy,
  ShippingPolicy,
  emptyCart,
} from "../components/constants/Defaults";
import { instagramLink } from "../components/constants/Texts";
import { Instagram } from "@mui/icons-material";
import Link from "next/link";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Badge,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Store(): JSX.Element {
  const [cart, setCart] = useState(emptyCart);
  const [openCart, setOpenCart] = useState(false);
  const [number, setNumber] = useState(numberOfItems(cart));

  const [openReturnPolicy, setReturnPolicy] = useState(false);
  const [openShipping, setShipping] = useState(false);
  const [openCookies, setCookies] = useState(true);
  const [openEula, setEula] = useState(false);
  const [openCopyRight, setCopyRight] = useState(false);
  const [openPrivacy, setPrivacy] = useState(false);

  return (
    <>
      <AppBarContainer
        numberOfItems={number}
        openCart={openCart}
        setOpenCart={setOpenCart}
      />
      <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-12">
        <div className="mb-12 md:mb-32 text-center lg:max-w-5xl w-full lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
          {!openCart && (
            <ProductStore
              numberOfItems={number}
              openCart={openCart}
              setOpenCart={setOpenCart}
              cart={cart}
              setCart={(c) => {
                setCart(c);
                setNumber(numberOfItems(c));
              }}
            />
          )}

          {openCart && (
            <CartDialog
              openCart={openCart}
              setOpenCart={setOpenCart}
              cart={cart}
              setCart={(c) => {
                setCart(c);
                setNumber(numberOfItems(c));
              }}
            />
          )}
        </div>
        <div className="mb-12 md:mb-32 grid text-center lg:max-w-2xl w-full lg:mb-0 md:grid-cols-3 lg:text-left">
          <Link
            href="/"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Home{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
          </Link>
          <Link
            href="/store/about"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              About{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Learn more about Nike Sneakers
            </p>
          </Link>
          <div
            role="presentation"
            onClick={() => setOpenCart(true)}
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            rel="noopener noreferrer"
          >
            <Link href="#">
              <h2 className={`mb-3 text-2xl font-semibold`}>
                Cart{" "}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                <Badge badgeContent={number} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </p>
            </Link>
          </div>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="mb-12 md:mb-32 grid text-center lg:max-w-2xl w-full lg:mb-0 md:grid-cols-1 lg:text-left">
          <a
            onClick={() => setReturnPolicy(true)}
            className="underline"
            rel="noopener noreferrer"
            style={{ cursor: "pointer" }} // Add this style
          >
            <h2 className={`mb-1 text-2sm font-semibold`}>Shipping Policy </h2>
          </a>
          <a
            onClick={() => setReturnPolicy(true)}
            className="underline"
            rel="noopener noreferrer"
            style={{ cursor: "pointer" }} // Add this style
          >
            <h2 className={`mb-1 text-2sm font-semibold`}>Return Policy </h2>
          </a>
          <a
            onClick={() => setCopyRight(true)}
            className="underline"
            rel="noopener noreferrer"
            style={{ cursor: "pointer" }} // Add this style
          >
            <h2 className={`mb-1 text-2sm font-semibold`}>Copyright </h2>
          </a>
          <a
            onClick={() => setEula(true)}
            className="underline"
            rel="noopener noreferrer"
            style={{ cursor: "pointer" }} // Add this style
          >
            <h2 className={`mb-1 text-2sm font-semibold`}>EULA </h2>
          </a>
          <a
            onClick={() => setPrivacy(true)}
            className="underline"
            rel="noopener noreferrer"
            style={{ cursor: "pointer" }} // Add this style
          >
            <h2 className={`mb-1 text-2sm font-semibold`}>Privacy </h2>
          </a>
          <a
            href="mailto:office@equismate.com"
            className="underline"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-1 text-2sm font-semibold`}>Contact </h2>
          </a>
          <a
            href={instagramLink}
            target="_blank"
            className="underline"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
        </div>
        <Dialog open={openReturnPolicy} onClose={() => setReturnPolicy(false)}>
          <DialogTitle>Return Policy</DialogTitle>
          <DialogContent>
            <ReturnPolicy />
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={() => setReturnPolicy(false)}>
              Agree & Close
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog open={openShipping} onClose={() => setShipping(false)}>
          <DialogTitle>Shipping Policy</DialogTitle>
          <DialogContent>
            <ShippingPolicy />
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={() => setShipping(false)}>
              Agree & Close
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog open={openEula} onClose={() => setEula(false)}>
          <DialogTitle>EULA Policy</DialogTitle>
          <DialogContent>
            <EulaPolicy />
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={() => setEula(false)}>
              Agree & Close
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog open={openPrivacy} onClose={() => setPrivacy(false)}>
          <DialogTitle>Privacy Policy</DialogTitle>
          <DialogContent>
            <PrivacyPolicy />
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={() => setPrivacy(false)}>
              Agree & Close
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog open={openCopyRight} onClose={() => setCopyRight(false)}>
          <DialogTitle>Copyrights</DialogTitle>
          <DialogContent>
            <CopyRight />
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={() => setCopyRight(false)}>
              Agree & Close
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog open={openCookies} onClose={() => setCookies(false)}>
          <DialogTitle>Cookies</DialogTitle>
          <DialogContent>
            <CookiesPolicy />
          </DialogContent>
          <DialogActions>
            <Button variant="outlined" onClick={() => setCookies(false)}>
              Agree & Close
            </Button>
          </DialogActions>
        </Dialog>
      </main>
    </>
  );
}
