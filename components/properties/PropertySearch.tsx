import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function PropertySearch() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Find Your Dream Property</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our
            curated selection of properties, each offering a unique story and a chance to redefine your life. With
            categories to suit every dreamer, your journey
          </p>
        </div>

        <div className="bg-card rounded-lg p-6 border border-border">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-end">
            <div className="md:col-span-2">
              <Input placeholder="Search For A Property" className="bg-background border-border text-foreground" />
            </div>
            <div>
              <Select>
                <SelectTrigger className="bg-background border-border text-foreground">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kabupaten-garut">Kabupaten Garut</SelectItem>
                  <SelectItem value="kabupaten-tasikmalaya">Kabupaten Tasikmalaya</SelectItem>
                  <SelectItem value="kabupaten-bandung">Kabupaten Bandung</SelectItem>
                  <SelectItem value="kota-bandung">Kota Bandung</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select>
                <SelectTrigger className="bg-background border-border text-foreground">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="villa">Villa</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="cottage">Cottage</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Select>
                <SelectTrigger className="bg-background border-border text-foreground">
                  <SelectValue placeholder="Pricing Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-500k">IDR 0 - 500M</SelectItem>
                  <SelectItem value="500k-1m">IDR 500M - 1B</SelectItem>
                  <SelectItem value="1m+">IDR 1B+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Find Property</Button>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center">
          <Link href="/configurator">
            <Button variant="outline" className="bg-purple-600 hover:bg-purple-700 text-white border-purple-600">
              🏗️ Design Your Custom Home
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
