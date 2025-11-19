import React from 'react';
import config from '../config';

interface Mouse13IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name Mouse13Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/mouse13)
 * @see {@link https://clicons.dev/icon/mouse13}
 */
const Mouse13Icon = React.forwardRef<SVGSVGElement, Mouse13IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 2;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M5.1851 18.9941C9.48005 21.4312 12.2743 19.1116 14.3687 15.5464C16.463 11.9811 17.1098 8.44303 12.8149 6.00594C8.51993 3.56885 5.72575 5.8884 3.63136 9.45367C1.53697 13.0189 0.890156 16.557 5.1851 18.9941Z'
    }
  ],
  [
    'path',
    {
      d: 'M12 8L12.7192 6.70551C13.6233 5.07824 14.0753 4.26461 14.8427 4.05095C15.61 3.83729 16.393 4.30704 17.9589 5.24654L20.0351 6.49216C20.7231 6.90492 21.6028 6.65997 22 5.94505'
    }
  ],
  [
    'path',
    {
      d: 'M12.25 10.299C12.483 9.89552 12.5995 9.69376 12.6254 9.49655C12.66 9.2336 12.5888 8.96767 12.4273 8.75726C12.3062 8.59946 12.1045 8.48297 11.701 8.25C11.2974 8.01703 11.0957 7.90054 10.8985 7.87458C10.6355 7.83996 10.3696 7.91122 10.1592 8.07267C10.0014 8.19376 9.88489 8.39552 9.65192 8.79904L9.15192 9.66506C8.91895 10.0686 8.80247 10.2703 8.7765 10.4675C8.74189 10.7305 8.81314 10.9964 8.9746 11.2068C9.09569 11.3646 9.29744 11.4811 9.70096 11.7141C10.1045 11.9471 10.3062 12.0636 10.5034 12.0895C10.7664 12.1241 11.0323 12.0529 11.2427 11.8914C11.4005 11.7703 11.517 11.5686 11.75 11.1651L12.25 10.299Z'
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

Mouse13Icon.displayName = 'Mouse13Icon';
export default Mouse13Icon;
