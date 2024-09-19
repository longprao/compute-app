"""Add unique constraint to executor model

Revision ID: 31b248b3cde4
Revises: 73ed84612528
Create Date: 2024-09-18 08:43:45.685311

"""

from collections.abc import Sequence

from alembic import op

# revision identifiers, used by Alembic.
revision: str = "31b248b3cde4"
down_revision: str | None = "73ed84612528"
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_unique_constraint("uq_miner_executor", "executor", ["miner_hotkey", "executor_id"])
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_constraint("uq_miner_executor", "executor", type_="unique")
    # ### end Alembic commands ###
