import React from 'react';
import config from '../config';

interface PeerToPeer3IconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

/**
 * @name PeerToPeer3Icon
 * @description SVG icon component from Clicons.
 * @preview ![img](https://clicons.dev/icon/peer-to-peer3)
 * @see {@link https://clicons.dev/icon/peer-to-peer3}
 */
const PeerToPeer3Icon = React.forwardRef<SVGSVGElement, PeerToPeer3IconProps>(
  ({ size, color, strokeWidth, absoluteStrokeWidth, className = '', ...rest }, ref) => {
    const finalSize = size ?? config.defaultSize ?? 24;
    const finalColor = color ?? config.defaultColor ?? 'currentColor';
    const finalStrokeWidth = strokeWidth ?? config.defaultStrokeWidth ?? 1.5;
    const finalAbsoluteStrokeWidth = absoluteStrokeWidth ?? config.defaultAbsoluteStrokeWidth ?? false;

    const iconData = [
  [
    'path',
    {
      d: 'M5.5166 3C4.68817 3 4.0166 3.67157 4.0166 4.5C4.0166 5.32843 4.68817 6 5.5166 6C6.34503 6 7.0166 5.32843 7.0166 4.5C7.0166 3.67157 6.34503 3 5.5166 3Z'
    }
  ],
  [
    'path',
    {
      d: 'M18.5166 3C17.6882 3 17.0166 3.67157 17.0166 4.5C17.0166 5.32843 17.6882 6 18.5166 6C19.345 6 20.0166 5.32843 20.0166 4.5C20.0166 3.67157 19.345 3 18.5166 3Z'
    }
  ],
  [
    'path',
    {
      d: 'M10.0166 6H10.5166'
    }
  ],
  [
    'path',
    {
      d: 'M13.5166 6H14.0166'
    }
  ],
  [
    'path',
    {
      d: 'M20.5166 14V17C20.5166 17.4647 20.5166 17.697 20.4782 17.8902C20.3204 18.6836 19.7002 19.3038 18.9068 19.4616C18.7136 19.5 18.4813 19.5 18.0166 19.5M3.5166 14V17C3.5166 17.4647 3.5166 17.697 3.55503 17.8902C3.71284 18.6836 4.33304 19.3038 5.12642 19.4616C5.31962 19.5 5.55194 19.5 6.0166 19.5'
    }
  ],
  [
    'path',
    {
      d: 'M10.5166 17.0022C10.6668 17 10.8327 17 11.0166 17H13.0166C13.2005 17 13.3664 17 13.5166 17.0022M10.5166 17.0022C9.89671 17.0111 9.54526 17.0571 9.30949 17.2929C9.0166 17.5858 9.0166 18.0572 9.0166 19C9.0166 19.9428 9.0166 20.4142 9.30949 20.7071C9.60239 21 10.0738 21 11.0166 21H13.0166C13.9594 21 14.4308 21 14.7237 20.7071C15.0166 20.4142 15.0166 19.9428 15.0166 19C15.0166 18.0572 15.0166 17.5858 14.7237 17.2929C14.4879 17.0571 14.1365 17.0111 13.5166 17.0022M10.5166 17.0022V15.5C10.5166 14.6716 11.1882 14 12.0166 14C12.845 14 13.5166 14.6716 13.5166 15.5V17.0022'
    }
  ],
  [
    'path',
    {
      d: 'M5.49849 11.5059H3.7284C3.52283 11.5059 3.31638 11.4755 3.12757 11.3904C2.51293 11.1133 2.20109 10.7475 2.05576 10.5187C1.97307 10.3885 1.98484 10.2226 2.07456 10.0976C2.78667 9.10527 4.43774 8.50591 5.49849 8.50586M5.50151 11.5059H7.2716C7.47717 11.5059 7.68362 11.4755 7.87243 11.3904C8.48707 11.1133 8.79891 10.7475 8.94424 10.5187C9.02693 10.3885 9.01515 10.2226 8.92544 10.0976C8.21333 9.10527 6.56226 8.50591 5.50151 8.50586'
    }
  ],
  [
    'path',
    {
      d: 'M18.4985 11.5059H16.7284C16.5228 11.5059 16.3164 11.4755 16.1276 11.3904C15.5129 11.1133 15.2011 10.7475 15.0558 10.5187C14.9731 10.3885 14.9848 10.2226 15.0746 10.0976C15.7867 9.10527 17.4377 8.50591 18.4985 8.50586M18.5015 11.5059H20.2716C20.4772 11.5059 20.6836 11.4755 20.8724 11.3904C21.4871 11.1133 21.7989 10.7475 21.9442 10.5187C22.0269 10.3885 22.0152 10.2226 21.9254 10.0976C21.2133 9.10527 19.5623 8.50591 18.5015 8.50586'
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

PeerToPeer3Icon.displayName = 'PeerToPeer3Icon';
export default PeerToPeer3Icon;
