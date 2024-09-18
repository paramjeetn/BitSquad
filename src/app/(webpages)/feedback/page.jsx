/**
 * v0 by Vercel.
 * @see https://v0.dev/t/UQCN2Twgpx8
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"

export default function Component() {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col">
      <header className="bg-gradient-to-r from-blue-600 to-blue-400 py-4 px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Feedback Management</h1>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <FilterIcon className="w-5 h-5 text-white" />
            <span className="sr-only">Filter</span>
          </Button>
          <Button variant="ghost" size="icon">
            <BellIcon className="w-5 h-5 text-white" />
            <span className="sr-only">Notifications</span>
          </Button>
        </div>
      </header>
      <main className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <h2 className="text-xl font-bold">Feedback on Rail Madad AI</h2>
          </div>
          <Card className="bg-white bg-opacity-80 backdrop-blur-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Department</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Comment</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
  <TableRow>
    <TableCell className="font-medium">COMP-001</TableCell>
    <TableCell>Customer Service</TableCell>
    <TableCell>2023-06-01</TableCell>
    <TableCell>
      <div className="flex items-center gap-1">
        <StarIcon className="w-5 h-5" style={{ fill: '#ffc107' }} />
        <StarIcon className="w-5 h-5" style={{ fill: '#ffc107' }} />
        <StarIcon className="w-5 h-5" style={{ fill: '#ffc107' }} />
        <StarIcon className="w-5 h-5" style={{ fill: '#e0e0e0' }} />
        <StarIcon className="w-5 h-5" style={{ fill: '#e0e0e0' }} />
      </div>
    </TableCell>
    <TableCell>
      {/* User comment for Customer Service feedback */}
      <Textarea
        className="p-2 border rounded-md w-full h-16 scrollbar-none text-gray-800 resize-none"
        placeholder="The Rail Madad AI did not resolve my issue and provided limited customer service support. It wasn't able to understand my query properly."
        readOnly
      />
    </TableCell>
  </TableRow>

  <TableRow>
    <TableCell className="font-medium">COMP-002</TableCell>
    <TableCell>Technical Support</TableCell>
    <TableCell>2023-05-15</TableCell>
    <TableCell>
      <div className="flex items-center gap-1">
        <StarIcon className="w-5 h-5" style={{ fill: '#ffc107' }} />
        <StarIcon className="w-5 h-5" style={{ fill: '#ffc107' }} />
        <StarIcon className="w-5 h-5" style={{ fill: '#ffc107' }} />
        <StarIcon className="w-5 h-5" style={{ fill: '#ffc107' }} />
        <StarIcon className="w-5 h-5" style={{ fill: '#e0e0e0' }} />
      </div>
    </TableCell>
    <TableCell>
      {/* User comment for Technical Support feedback */}
      <Textarea
        className="p-2 border rounded-md w-full h-16 scrollbar-none text-gray-800 resize-none"
        placeholder="The AI helped me resolve my technical issue quickly, but there were a few cases where it struggled with more complex technical queries."
        readOnly
      />
    </TableCell>
  </TableRow>

  <TableRow>
    <TableCell className="font-medium">COMP-003</TableCell>
    <TableCell>Billing</TableCell>
    <TableCell>2023-04-30</TableCell>
    <TableCell>
      <div className="flex items-center gap-1">
        <StarIcon className="w-5 h-5" style={{ fill: '#ffc107' }} />
        <StarIcon className="w-5 h-5" style={{ fill: '#ffc107' }} />
        <StarIcon className="w-5 h-5" style={{ fill: '#ffc107' }} />
        <StarIcon className="w-5 h-5" style={{ fill: '#ffc107' }} />
        <StarIcon className="w-5 h-5" style={{ fill: '#ffc107' }} />
      </div>
    </TableCell>
    <TableCell>
      {/* User comment for Billing feedback */}
      <Textarea
        className="p-2 border rounded-md w-full h-16 scrollbar-none text-gray-800 resize-none"
        placeholder="The Rail Madad AI was excellent in addressing my billing issue. It was fast and provided me with all the necessary information to resolve the problem."
        readOnly
      />
    </TableCell>
  </TableRow>

  <TableRow>
    <TableCell className="font-medium">COMP-004</TableCell>
    <TableCell>Product</TableCell>
    <TableCell>2023-03-20</TableCell>
    <TableCell>
      <div className="flex items-center gap-1">
        <StarIcon className="w-5 h-5" style={{ fill: '#ffc107' }} />
        <StarIcon className="w-5 h-5" style={{ fill: '#ffc107' }} />
        <StarIcon className="w-5 h-5" style={{ fill: '#e0e0e0' }} />
        <StarIcon className="w-5 h-5" style={{ fill: '#e0e0e0' }} />
        <StarIcon className="w-5 h-5" style={{ fill: '#e0e0e0' }} />
      </div>
    </TableCell>
    <TableCell>
      {/* User comment for Product feedback */}
      <Textarea
        className="p-2 border rounded-md w-full h-16 scrollbar-none text-gray-800 resize-none"
        placeholder="I was disappointed with the Rail Madad AI in terms of product-related queries. It couldn’t provide sufficient details, and I had to contact customer support directly."
        readOnly
      />
    </TableCell>
  </TableRow>
</TableBody>

  

            </Table>
          </Card>
        </div>
      </main>
    </div>
  )
}

function BellIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  )
}


function FilterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  )
}


function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}