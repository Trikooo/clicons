import React from 'react';
import config from '../config';

interface AlignHorizontalCenterIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name AlignHorizontalCenterIcon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/align-horizontal-center)
 * @see {@link https://clicons.dev/icon/align-horizontal-center}
 */
const AlignHorizontalCenterIcon = React.forwardRef<SVGSVGElement, AlignHorizontalCenterIconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M12 19L12 22'
    }
  ],
  [
    'path',
    {
      d: 'M12 10L12 14'
    }
  ],
  [
    'path',
    {
      d: 'M12 2L12 5'
    }
  ],
  [
    'path',
    {
      d: 'M8.00036 7.5C8.00036 6.65611 7.91699 5.68211 8.75036 5.20096C9.09844 5 9.56575 5 10.5004 5H13.5004C14.435 5 14.9023 5 15.2504 5.20096C16.0837 5.68211 16.0004 6.65611 16.0004 7.5C16.0004 8.34389 16.0837 9.31789 15.2504 9.79904C14.9023 10 14.435 10 13.5004 10H10.5004C9.56575 10 9.09844 10 8.75036 9.79904C7.91699 9.31789 8.00036 8.34389 8.00036 7.5Z'
    }
  ],
  [
    'path',
    {
      d: 'M4.00036 16.5C4.00036 15.6561 3.91699 14.6821 4.75036 14.201C5.09844 14 5.56575 14 6.50036 14H17.5004C18.435 14 18.9023 14 19.2504 14.201C20.0837 14.6821 20.0004 15.6561 20.0004 16.5C20.0004 17.3439 20.0837 18.3179 19.2504 18.799C18.9023 19 18.435 19 17.5004 19H6.50036C5.56575 19 5.09844 19 4.75036 18.799C3.91699 18.3179 4.00036 17.3439 4.00036 16.5Z'
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

AlignHorizontalCenterIcon.displayName = 'AlignHorizontalCenterIcon';
export default AlignHorizontalCenterIcon;
