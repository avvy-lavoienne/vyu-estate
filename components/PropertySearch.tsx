import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function PropertySearch() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Find Your Dream Property</h1>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our
            curated selection of properties, each offering a unique story and a chance to redefine your life. With
            categories to suit every dreamer, your journey
          </p>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-end">
            <div className="md:col-span-2">
              <Input placeholder="Search For A Property" className="bg-gray-700 border-gray-600 text-white" />
            </div>
            <div>
              <Select>
                <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
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
                <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
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
                <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                  <SelectValue placeholder="Pricing Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-500k">$0 - $500k</SelectItem>
                  <SelectItem value="500k-1m">$500k - $1M</SelectItem>
                  <SelectItem value="1m+">$1M+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Find Property</Button>
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
