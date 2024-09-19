"""Set default value to rented in executor model

Revision ID: ac1953fa1c5e
Revises: 31b248b3cde4
Create Date: 2024-09-18 09:00:53.093516

"""

from collections.abc import Sequence

import sqlalchemy as sa
from alembic import op

# revision identifiers, used by Alembic.
revision: str = "ac1953fa1c5e"
down_revision: str | None = "31b248b3cde4"
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column("executor", "rented", existing_type=sa.BOOLEAN(), nullable=False)
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column("executor", "rented", existing_type=sa.BOOLEAN(), nullable=True)
    # ### end Alembic commands ###
