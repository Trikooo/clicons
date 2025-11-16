import React from 'react';
import config from '../config';

interface GitPullRequestClosedIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name GitPullRequestClosedIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/git-pull-request-closed)
 * @see {@link https://clicons.dev/icon/git-pull-request-closed}
 */
const GitPullRequestClosedIcon = React.forwardRef<SVGSVGElement, GitPullRequestClosedIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M6 8L6 16'
    }
  ],
  [
    'path',
    {
      d: 'M18 11L18 16'
    }
  ],
  [
    'circle',
    {
      cx: '6',
      cy: '18',
      r: '2'
    }
  ],
  [
    'circle',
    {
      cx: '6',
      cy: '6',
      r: '2'
    }
  ],
  [
    'circle',
    {
      cx: '18',
      cy: '18',
      r: '2'
    }
  ],
  [
    'path',
    {
      d: 'M20 4L18 6M18 6L16 8M18 6L20 8M18 6L16 4'
    }
  ]
];

    const renderElement = (item: any, index: number): React.ReactElement => {
      const tag = item[0];
      const attrs = item[1];
      const children = item[2];
      const Element = tag as any;

      const processedAttrs: any = { ...attrs };

      // Apply color and stroke properties to shape elements
      const isShapeElement = ['path', 'circle', 'rect', 'line', 'polyline', 'polygon', 'ellipse'].includes(tag);

      if (isShapeElement) {
        if (!processedAttrs.stroke) processedAttrs.stroke = finalColor;
        if (!processedAttrs.fill) processedAttrs.fill = 'none';

        if (!processedAttrs.strokeWidth) {
          processedAttrs.strokeWidth = finalAbsoluteStrokeWidth
            ? finalStrokeWidth
            : finalStrokeWidth * (finalSize / 24);
        }
        if (!processedAttrs.strokeLinecap) processedAttrs.strokeLinecap = 'round';
        if (!processedAttrs.strokeLinejoin) processedAttrs.strokeLinejoin = 'round';
      }

      // Handle nested elements
      if (children) {
        if (Array.isArray(children)) {
          return <Element key={index} {...processedAttrs}>{children.map(renderElement)}</Element>;
        } else if (typeof children === 'string') {
          return <Element key={index} {...processedAttrs}>{children}</Element>;
        }
      }

      return <Element key={index} {...processedAttrs} />;
    };

    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={finalSize}
        height={finalSize}
        viewBox="0 0 24 24"
        fill="none"
        className={className}
        {...rest}
      >
        {iconData.map(renderElement)}
      </svg>
    );
  }
);

GitPullRequestClosedIcon.displayName = 'GitPullRequestClosedIcon';
export default GitPullRequestClosedIcon;
