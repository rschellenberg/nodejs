resource "aws_route_table" "route_table" {
 vpc_id = aws_vpc.main.id
 route {
   cidr_block = "0.0.0.0/0"
   gateway_id = aws_internet_gateway.internet_gateway.id
 }
}

resource "aws_route_table_association" "subnet1_route" {
 subnet_id      = aws_subnet.subnet.id
 route_table_id = aws_route_table.route_table.id
}

resource "aws_route_table_association" "subnet2_route" {
 subnet_id      = aws_subnet.subnet2.id
 route_table_id = aws_route_table.route_table.id
}
